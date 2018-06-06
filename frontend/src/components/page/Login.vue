<template>
    <div class="login-wrap">
        <div class="ms-title">购票端</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="login-btn">
                        <el-button type="primary"  @click="handleRegister">注册</el-button>
                    </div>
                </el-form-item>

            </el-form>
        </div>



        <!-- 注册弹出框 -->
        <el-dialog title="注册" :visible.sync="resigterEditVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="resigterEditVisible = false">取 消</el-button>
                <el-button type="primary" @click="register">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                loginSuccessfully: false,
                resigterEditVisible: false,
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
                },
                form: {
                    id:'',
                    username:'',
                    name:'',
                    password:'',
                    phone:'',
                },
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',this.ruleForm.username);
                        this.$axios({
                            method: 'post',
                            url:'http://localhost:8080/Login',
                            headers: { 'Content-type': 'application/json;charset=UTF-8' },
                            params: {
                                    username: this.ruleForm.username,
                                    password: this.ruleForm.password,
                                }
                        }).then((response) => {
                            console.log("response");
                            console.log(response);
                            console.log(response.data);
                            if (response.data) {
                                console.log("set true");
                                this.loginSuccessfully = true;
                            }
                            console.log("after login");
                            console.log(this.loginSuccessfully);
                            if(this.loginSuccessfully) {
                                this.$router.push('/');
                                this.$message.success("登录成功!");
                            } else {
                                this.$message.error("用户名或密码错误!请重试!");
                            }
                        }).catch(function (error) {
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleRegister() {
                this.resigterEditVisible = true;
            },
            register() {
                this.$axios({
                    method: 'post',
                    url:'http://localhost:8080/Register',
                    headers: { 'Content-type': 'application/json;charset=UTF-8' },
                    data: JSON.stringify(this.form)
                }).then((response) => {
                    console.log("receive");
                    console.log(response);
                    this.$message.success("注册成功!");
                    this.resigterEditVisible = false;
                }).catch(function (error) {
                        console.log(error);
                    });

            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
