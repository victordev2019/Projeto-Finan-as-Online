import { CategoryService } from './../../categories/shared/category.service';
import { Entry } from './entry.model';
import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Observable, throwError } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry>{

 

  constructor(protected injector: Injector, private categoryService: CategoryService) { 
    super('api/entries', injector, Entry.fromJson)
    console.log(Entry.fromJson);
    
  }

  

  create(entry: Entry):Observable<Entry>{
    return this.setCategoryAndSendService(entry, super.create.bind(this))
}

  update(entry: Entry):Observable<Entry>{
    return this.setCategoryAndSendService(entry, super.update.bind(this))
}

 

  // METÓDOS Protegidos

 private setCategoryAndSendService(entry: Entry, sendFn: any) : Observable<Entry>{
   return this.categoryService.getById(entry.categoryId).pipe(
   flatMap(category => {
     entry.category = category;
     return sendFn(entry)
   }),
   catchError(this.handleError)
   )
 }
  
}
/*
class Entry
  belongs : category

class Category
  has_many : entries
*/