import{
  iit,
  it,
  ddescribe,
  describe,
  expect,
  inject,
  async,
  beforeEach,
  beforeEachProviders,
  fakeAsync,
  tick  
} from '@angular/core/testing';

import {
  TestComponentBuilder,
  ComponentFixture
} from '@angular/compiler/testing';

import{ProductsService} from '../app/service/products.service';
import{CartService} from '../app/service/cart.service';

import { Component } from '@angular/core';
import { Step1Component } from '../app/step1/step1.component';


@Component({
    directives:[Step1Component]
})
class Step1ComponentTest{}


describe('step1 component', ()=>{
   beforeEachProviders(()=>[ProductsService, CartService])



})