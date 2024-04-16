const myTemplate = `
import 'package:flutter/cupertino.dart';
import 'package:habit/life/base/paging/base_list_view_model.dart';
import 'package:habit/life/widget/paging/paging_load_callback.dart';

import '../../../model/wm_feedback_model.dart';
import '../entity/wm_feedback_member_info_entity.dart';

/// 负责人/执行人的ViewModel
class FeedbackPersonListViewModel extends BaseListViewModel<WmFeedbackModel, WmFeedbackMemberInfoEntity> {
  /// List<WmFeedbackMemberInfoEntity>

  FeedbackPersonListViewModel(super.model);

  void initData(BuildContext context) {}

  @override
  void loadData(int pageIndex, LoadCallback<WmFeedbackMemberInfoEntity> loadCallback) {
    launch(() async {}, (err) {
      loadCallback.onFailure();
    }, ignoreToast: true);
  }

  @override
  void showEmpty() {}
}

    `

    module.exports = myTemplate
