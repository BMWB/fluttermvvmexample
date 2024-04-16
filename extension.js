const vscode = require('vscode');
const fs = require('fs');
const config = require('./src/index');

function activate(context) {
	console.log('Congratulations, your extension "fluttermvvmexample" is now active!');

	let disposable = vscode.commands.registerCommand('fluttermvvmexample.helloWorld', function (args) {
		console.log("args ==>", args);
		useExtension(args).then(() => {
			vscode.window.showInformationMessage('开发vscode插件成功!');
		}).catch((error) => {
			console.error(error);
		});
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

const useExtension = (args) => {
	return new Promise((resolve, reject) => {
		try {
			const workspaceFolders = vscode.workspace.workspaceFolders;
			if (!workspaceFolders || workspaceFolders.length === 0) {
				vscode.window.showErrorMessage("请先打开一个工作区");
				reject("");
				return;
			}

			const selectPath = args.path;
			const indexjsPath = `${selectPath}/example/viewmodel/exampleviewmodel.dart`;

			if (fs.existsSync(indexjsPath)) {
				vscode.window.showErrorMessage("该目录下已存在 index.vue 文件！");
				reject("");
				return;
			}

			fs.mkdirSync(`${selectPath}/example/viewmodel/`, { recursive: true });
			fs.writeFileSync(indexjsPath, config.myTemplate);

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