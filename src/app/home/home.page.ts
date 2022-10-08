import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ContentChange, QuillEditorComponent } from 'ngx-quill';
import { DisplayPage } from '../display/display.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild(QuillEditorComponent) editor: QuillEditorComponent;
  mytext = null;
  editorStyle = {
    height: '300px',
    // backgroundColor: '#a0a0a0',
    // width: '100%',
    // color: 'black',
  };
  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  clearEditor() {
    this.editor.quillEditor.setText('');
  }

  async preview() {
    console.log(this.mytext);
    const modal = await this.modalCtrl.create({
      component: DisplayPage,
      componentProps: { data: this.mytext },
    });

    await modal.present();
  }

  ngAfterViewInit(): void {
    this.editor.onContentChanged.subscribe(async (change: ContentChange) => {
      console.log('Editor changed: ', change);

      const changed = change.content.ops.pop();
      if (changed.insert.indexOf('ionic') >= 0) {
        const toast = await this.toastCtrl.create({
          message: 'You called me?',
          duration: 2000,
        });
        toast.present();
      }
    });
  }
}
