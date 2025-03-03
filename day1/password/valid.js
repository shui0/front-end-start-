const password_input = document.getElementById('password');
const strength_meter = document.getElementById('passwordStrength');
// 元素.addEventListener('事件类型', 处理函数)
password_input.addEventListener('input',()=>{
    const password = password_input.value;
    let strength = 0;

    //校验规则
    const has_lower = /[a-z]/.test(password);
    const has_upper = /[A-Z]/.test(password);
    const has_number = /\d/.test(password);
    const has_special = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const length_ok = password.length >= 8;

    if (length_ok) strength += 1;
    if (has_lower && has_upper) strength += 1;
    if (has_number) strength += 1;
    if (has_special) strength += 1;

    //强度反馈
    const strength_text = ['弱','中','良','强','极强']
    strength_meter.textContent = `强度：${strength_text[strength]}（${strength+1}/5）`;
    strength_meter.className = `strength-meter level-${strength}`;
}

)