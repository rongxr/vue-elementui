<template>
    <div class="login-wrap">
        
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
            <div class="ms-title">后台管理系统</div>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {login} from '@/api/login.js'

    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        var qs = require('qs');
                        var params = qs.stringify({
                            username: self.ruleForm.username,
                            password: self.ruleForm.password
                        });
                        login(params).then(result => {
                            //if (result.status) {
                            if (result.code==200) {
                                sessionStorage.setItem('login_username',self.ruleForm.username);
                                sessionStorage.setItem('token',result.data.token);
                                sessionStorage.setItem('meuns',qs.stringify(result.data.meuns));
                                sessionStorage.setItem('routers',result.data.routers);
                                self.$router.push('/home');
                            } else {
                                self.$message.error(response.data.message);
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
       
        width:100%;
        height:100%;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        /*margin: 180px auto;*/
        /*width: 350px;*/
        padding: 35px 35px 15px 35px;
        /*background: #fff;*/
        background: #2d3a4b;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .ms-title{
        margin: -20px auto 30px auto;
        text-align: center;
        font-size:30px;
        /*color: #505458;*/
        color: #fff;
    }
    .ms-login{
        position: absolute;
        left:48%;
        top:35%;
        width:380px;
        height:190px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        /*background: #fff;*/
        background: #283443;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>