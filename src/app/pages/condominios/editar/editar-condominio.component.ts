import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../../core/services/http.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Table} from 'primeng/table';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {EditarMoradorComponent} from "../../moradores/editar/editar-morador.component";
import {CustomValidatorsService} from "../../../shared/validators/custom-validators.service";
import {Moradores} from "../../../shared/models/moradores.interface";
import {filter} from "rxjs/operators";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-editar-condominio',
  templateUrl: './editar-condominio.component.html',
  styleUrls: ['./editar-condominio.component.scss'],
  providers: [DialogService]
})
export class EditarCondominioComponent implements OnInit {

  id: number | null = null;

  listaMoradoresOriginal: Moradores[] = [];

  form: FormGroup;

  loading: any = {
    condominio: false,
    moradores: false,
  };

  pending: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome_fantasia: ['', [Validators.required]],
      razao_social: ['', [Validators.required]],
      cnpj: ['', [Validators.required, Validators.minLength(1)]],
      moradores: this.fb.array([])
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (!isNaN(+params.get('id'))) {
        this.id = +params.get('id');
        this.initialize(this.id);
      }
    });
  }

  get moradores() {
    return this.form.get('moradores') as FormArray;
  }

  createMorador() {
    return new FormGroup({
      condominio_id: new FormControl<number>(null, [Validators.required, Validators.min(1)]),
      nome: new FormControl<string>('', [Validators.required]),
      numero: new FormControl<string>('', [Validators.required]),
    });
  }

  initialize(id: number) {
    this.loading.condominio = true;
    this.loading.moradores = true;
    this.http.getCondominio(id).subscribe({
      next: value => {
        this.form.patchValue(value);
        this.loading.condominio = false;
      }
    });
    this.http.getMoradores(id).subscribe({
      next: value => {
        this.listaMoradoresOriginal = value;
        value.forEach(item => {
          const group = this.createMorador();
          group.patchValue(item);
          this.moradores.push(group);
        });
        this.loading.moradores = false;
      }
    });
  }

  clear(table: Table) {
    table.clear();
  }

  modalInserirMorador(): void {
    const added = this.moradores.value.map(i => i.numero);
    const modal: DynamicDialogRef = this.dialogService.open(EditarMoradorComponent, {
      header: 'Adicionar morador',
      data: {
        indisponiveis: added,
      },
      closable: false
    });
    modal.onClose
      .pipe(
        filter(item => item !== undefined)
      )
      .subscribe(event => {
        const g = this.createMorador();
        g.patchValue({...event, condominio_id: this.id});
        this.moradores.push(g);
        this.pending = true;
      });
  }

  modalEditarMorador(index: number): void {
    const added = this.moradores.value.map((i: any) => i.numero).filter((_: any, i: any) => i !== index);
    const modal: DynamicDialogRef = this.dialogService.open(EditarMoradorComponent, {
      header: 'Editar morador',
      closable: false,
      data: {
        indisponiveis: added,
        morador: this.moradores.at(index).value
      },
    });
    modal
      .onClose
      .pipe(
        filter(item => item !== undefined)
      )
      .subscribe(event => {
        this.moradores.at(index).patchValue(event);
      });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('valido');
    } else {
      console.log(CustomValidatorsService.findInvalidControls(this.form));
    }
  }
}
