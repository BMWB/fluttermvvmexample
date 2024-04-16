const myTemplate = `
import 'package:habit/life/widget/base_view_model.dart';
import 'package:module_base/common/colors.dart';

class TempVm extends BaseViewModel {
  TempVm(super.model);

  initData(){
    setAppBarTitle('Temp');
    setAppBarTitleColor(color_2A2F3C);
    setAppBarBackIconColor(color_2A2F3C);
    setAppBarElevation(0);
  }
}

    `

    module.exports = myTemplate
