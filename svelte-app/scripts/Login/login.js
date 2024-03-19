class User{
    constructor(id=null, password=null){
        this.id=id;
        this.password=password;
    }

    checkPassword(){
        let checkps=this.password
        if (checkps < 7) {
            alert("password 길이 가 너무 짧습니다.");
        }else {
            console.log("password.length OK!");
        }
    }
}
export {User}