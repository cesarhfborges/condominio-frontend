import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {
    const config: any = {
      required: 'Campo Obrigatório.',
      min: `O mínimo para o campo é ${validatorValue?.min ?? '0'}.`,
      max: `O máximo para o campo é ${validatorValue?.max ?? '0'}`,
      invalidNumberField: 'Somente números são aceitos.',
      invalidPlacaField: 'A Placa informada é inválida.',
      invalidCepField: 'O CEP informado é inválido.',
      invalidDateField: 'Data inserida é inválida.',
      invalidTelefoneField: 'Numero de telefone inválido.',
      invalidCreditCard: 'Número de cartão de crédito inválido.',
      email: 'Endereço de email inválido.',
      invalidPassword: 'Senha inválida. A senha deve ter pelo menos 6 caracteres e conter um número.',
      invalidPasswords: 'Senhas inválidas. As senhas informadas não conferem.',
      invalidCnpjField: 'CNPJ Informado é invalido.',
      invalidCpfField: 'CPF Informado é invalido.',
      avisarMenorQueRodagem: 'O item avisar deve ser menor que a rodagem.',
      invalidUfField: 'A uf informada é inválida.',
      invalidTipoEnderecoField: 'O Tipo de endereço informado é inválido..',
    };
    return config[validatorName];
  }
}
