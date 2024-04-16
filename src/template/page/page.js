const myTemplate = `
import 'package:flutter/cupertino.dart';
import 'package:habit/life/base/view_model_provider.dart';
import 'package:habit/life/widget/base/base_scaffold.dart';
import 'package:habit/life/widget/base/base_appbar_widget.dart';
import '../model/abc_model.dart';
import '../viewmodel/abc_viewmodel.dart';

class TempPage extends StatefulWidget {
  const TempPage({super.key});

  @override
  State<TempPage> createState() => _TempPageState();
}

class _TempPageState extends State<TempPage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider(
      create: (create) => TempVm(TempModel()),
      initViewModel: (context, viewModel) {
        viewModel.initData();
      },
      builder: (context, viewModel, child) {
        return BaseScaffold(
            toolBar: AppBarWidget(viewModel),
            body: Stack(
              children: const [SizedBox()],
            ),
            viewModel: viewModel);
      },
    );
  }
}

    `

    module.exports = myTemplate
