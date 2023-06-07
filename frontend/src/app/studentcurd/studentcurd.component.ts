import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentcurd',
  templateUrl: './studentcurd.component.html',
  styleUrls: ['./studentcurd.component.css']
})
export class StudentcurdComponent implements OnInit {

  StudentArray:any[]=[];
 
  name:string="";
  address:string="";
  phone:string="";
  currentStudentId: string="";
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    this.http.get("http://localhost:5000/user/getAll").subscribe((resultData:any)=>{
      console.log(resultData)
      this.StudentArray=resultData.data
    })
  }

  register(){
    let bodydata={
      "name":this.name,
      "address":this.address,
      "phone":this.phone
    };
    this.http.post("http://localhost:5000/user/create",bodydata).subscribe((resultData:any)=>{
      console.log(resultData);
      alert('User registered Successfully')
      this.name='';
      this.address='';
      this.phone='';
    })
  }

  setDelete(data:any){
    this.http.delete("http://localhost:5000/user/remove"+"/"+data._id).subscribe((resultData:any)=>{
        console.log(resultData);
        alert('Student Deleted Successfully')
        this.getAllStudent();
    })
  }

  setUpdate(data:any){
    this.name=data.name;
    this.address=data.address;
    this.phone=data.phone;

    this.currentStudentId=data._id
  }

  UpdateRecords(){
    let bodyData={
      "name":this.name,
      "address":this.address,
      "phone":this.phone
    };

    this.http.patch("http://localhost:5000/user/update"+"/"+this.currentStudentId,bodyData).subscribe((resultData)=>{
      console.log(resultData);
      alert('Update Successfully')
      this.getAllStudent()
    })
  }

  save(){
    if(this.currentStudentId==''){
      this.register();
    }else{
      this.UpdateRecords()
    }
  }
}
