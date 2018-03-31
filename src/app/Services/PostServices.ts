import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.services';
//import { Profile } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ProfilesService {
  constructor (
    private apiService: ApiService
  ){}}