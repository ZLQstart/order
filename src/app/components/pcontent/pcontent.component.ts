import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.less']
})
export class PcontentComponent implements OnInit {
  public domain:string
  public list:any[]=[]

  constructor(public router:ActivatedRoute,public common:CommonService) { 
    this.domain=this.common.domain
  }

  ngOnInit() {
    this.router.params.subscribe((value:any)=>{
      console.log(value)
      this.requestContent(value.id)
    })
  }
  requestContent(id) {
    //详情：http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955
    let api='api/productcontent?id='+id
    this.common.get(api).then((response:any)=>{
      console.log(response)
      this.list=response.result[0]
      console.log(this.list)
    })

  }

}
