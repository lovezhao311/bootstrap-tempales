layui.define(['jquery', 'form'], function(exports) {
    var form = layui.form()
    $ = layui.jquery;
    //自定义验证规则
    form.verify({
        role: [/(.+){3,10}/, '用户组名称必须3到10位'],
        tags: [/^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]{2,10}$/, '标签名称必须2到10位'],
        pass: function(value) {
            if(value != ''){
              if(!new RegExp("^(.+){6,12}$").test(value)){
                return '密码必须6到12位';
              }
            }
        },
        content: function(value) {
            layedit.sync(editIndex);
        },
        username: function(value) {
            if(value == ''){
              return '用户名不能为空';
            }
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '用户名首尾不能出现下划线\'_\'';
            }
            if (/^\d+\d+\d$/.test(value)) {
                return '用户名不能全为数字';
            }
        }
    });
    exports('verify', {});
});
