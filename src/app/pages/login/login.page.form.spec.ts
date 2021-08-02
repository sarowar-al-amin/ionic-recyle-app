import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { LoginPageForm } from './login.page.form';

describe('LoginPageForm', ()=>{

  let loginPageForm: LoginPageForm;
  let form: FormGroup;

  beforeEach(()=>{
    loginPageForm = new LoginPageForm(new FormBuilder());
    form = loginPageForm.createForm();
  });

  it(`It should create empty login form`, ()=>{
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual('');
    expect(form.get('email').valid).toBeFalsy();
    expect(form.get('password')).not.toBeNull();
    expect(form.get('password').value).toEqual('');
    expect(form.get('password').valid).toBeFalsy();
  });

  it(`It will return email invalid since email is not valid`, ()=>{
    form.get('email').setValue('invalid email');
    expect(form.get('email').valid).toBeFalsy();
  });

  it(`It will return valid email since the input is valid`, ()=>{
    form.get('email').setValue('valid@email.com');
    expect(form.get('email').valid).toBeTruthy();
  });

  it(`It will return a valid form`, ()=>{
    form.get('email').setValue('valid@email.com');
    form.get('password').setValue('inputedPassword');

    expect(form.valid).toBeTruthy();
  });

});
