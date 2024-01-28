import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import condominiosMock from "../../../shared/mocks/condominios.mock";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {CustomValidatorsService} from "../../../shared/validators/custom-validators.service";

@Component({
  selector: 'app-editar-morador',
  templateUrl: './editar-morador.component.html',
  styleUrls: ['./editar-morador.component.scss']
})
export class EditarMoradorComponent implements OnInit {

  form: FormGroup;
  condominios: any[] = condominiosMock;
  indisponiveis: string[] = [];


  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.indisponiveis = this.config.data.indisponiveis;
    this.form = this.fb.group({
      condominio_id: ['', []],
      numero: ['', [Validators.required, CustomValidatorsService.notInArray(this.indisponiveis)]],
      nome: ['', [Validators.required]],
    }, {
      validators: []
    });
    if (this.config.data?.morador !== undefined) {
      this.form.patchValue(this.config.data.morador, {emitEvent: false});
    }
    this.cd.markForCheck();
  }

  close(): void {
    this.ref.close();
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.ref.close(this.form.value);
    } else {
      console.log(CustomValidatorsService.findInvalidControls(this.form));
    }
  }
}
