function createtime() {
    const now = new Date();
    const grt = new Date("06/01/2024 00:00:00");   // 网站诞生时间

    // 计算天、小时、分钟和秒
    const days = Math.floor((now - grt) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((now - grt) / (1000 * 60 * 60) % 24).toString().padStart(2, '0');
    const minutes = Math.floor((now - grt) / (1000 * 60) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((now - grt) / 1000 % 60).toString().padStart(2, '0');

    // HTML 输出
    const currentTimeHtml = `
        <div>
            Survival ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 
        </div>`;

    const runtime = document.getElementById("runtime");
    if (runtime) runtime.innerHTML = currentTimeHtml;
}

// 设置每秒调用函数
setInterval(createtime, 1000);
