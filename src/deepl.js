import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '../theme/icons/DeepL_Logo_darkBlue_v2.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import translate from 'deepl';

export default class Deepl extends Plugin {
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('deepl', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Translate with Deepl',
        icon: imageIcon,
        tooltip: true
      });

      view.on('execute', (options = {}) => {
        let data = editor.getData();
        let id   = 'read-only-deepl';

        editor.enableReadOnlyMode(id);

        translate({
          free_api: editor.config.get('deepl.free_api'),
          text: data,
          target_lang: editor.config.get('deepl.target_lang'),
          auth_key: editor.config.get('deepl.auth_key')
        }).then(result => {
          if (result.data.translations.length > 0) {
            let translation = result.data.translations[0].text;
            editor.setData(translation, {});
          }
        }).finally(result => {
          editor.disableReadOnlyMode(id);
        });

      });

      return view;
    });
  }

}
