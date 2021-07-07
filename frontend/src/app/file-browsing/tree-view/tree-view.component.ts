import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DirectoryService, DirectoryDTO, FileService, FileDTO, ExifDTO } from "../../../api/index";


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})

export class TreeViewComponent {
  @Input()
  value: DirectoryDTO[] = [];
  
  @Input()
  files: FileDTO[] = [];

  @Input()
  level = 0;

  @Input()
  parentClass = "";

  @Output() 
  imagePath = new EventEmitter<string>();

  @Output()
  imageDataJson = new EventEmitter<string>();

  private expandDirectory(className: string){
    var elements = document.querySelectorAll(".n"+className);
    elements.forEach(element => {
      if(element.hasAttribute("style")){
        element.removeAttribute("style");
      } else{
        element.setAttribute("style", "display: none");
      }
    })
  }

  public chooseImage(filePath: string){
    this.imagePath.emit(filePath);
  }

  public chooseImageDataJson(_imageDataJson: string){
    this.imageDataJson.emit(_imageDataJson);
  }

  public getFilePathOnChange($event){
    this.chooseImage($event);
  }

  public getImageDataJsonOnChange($event){
    this.chooseImageDataJson($event);
  }
}