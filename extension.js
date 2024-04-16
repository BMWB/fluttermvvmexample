const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const config = require('./src/index');
const pageTemplate = require('./src/template/page/page');

function activate(context) {
    console.log('Congratulations, your extension "fluttermvvmexample" is now active!');

    let disposable = vscode.commands.registerCommand('fluttermvvmexample.helloWorld', function (args) {
        vscode.window.showInputBox({
            prompt: 'Enter the class name'
        }).then((inputName) => {
            if (inputName !== undefined && inputName.trim() !== '') {
                useExtension(args, inputName).then(() => {
                    vscode.window.showInformationMessage('开发vscode插件成功!');
                }).catch((error) => {
                    console.error(error);
                });
            }
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

const useExtension = (args, inputName) => {
    return new Promise((resolve, reject) => {
        try {
            const workspaceFolders = vscode.workspace.workspaceFolders;
            if (!workspaceFolders || workspaceFolders.length === 0) {
                vscode.window.showErrorMessage("请先打开一个工作区");
                reject("");
                return;
            }

            const selectPath = args.path;
            const directoryPath = path.join(selectPath, inputName);

            if (fs.existsSync(directoryPath)) {
                vscode.window.showErrorMessage("该目录下已存在相应的文件夹！");
                reject("");
                return;
            }

            fs.mkdirSync(directoryPath);

            const viewmodelFilePath = path.join(directoryPath, 'viewmodel', `${inputName}_viewmodel.dart`);
            const modelFilePath = path.join(directoryPath, 'model', `${inputName}_model.dart`);
            const pagesFilePath = path.join(directoryPath, 'pages', `${inputName}_page.dart`);
            const viewGitKeepPath = path.join(directoryPath, 'view', '.gitkeep');
            const entityGitKeepPath = path.join(directoryPath, 'entity', '.gitkeep');

            fs.mkdirSync(path.join(directoryPath, 'viewmodel'));
            fs.mkdirSync(path.join(directoryPath, 'model'));
            fs.mkdirSync(path.join(directoryPath, 'pages'));
            fs.mkdirSync(path.join(directoryPath, 'view'));
            fs.mkdirSync(path.join(directoryPath, 'entity'));

            const replacedPageTemplate = pageTemplate.replace(/abc_/g, `${inputName}_`);

            fs.writeFileSync(viewmodelFilePath, config.temp_vm);
            fs.writeFileSync(modelFilePath, config.temp_model);
            fs.writeFileSync(pagesFilePath, replacedPageTemplate);
            fs.writeFileSync(viewGitKeepPath, '');
            fs.writeFileSync(entityGitKeepPath, '');

            resolve("");
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    activate,
    deactivate
};