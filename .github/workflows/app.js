const express = require('express');
const app = express();

// 觸發 Gitleaks / SonarQube: 硬編碼金鑰
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE"; 

app.get('/', (req, res) => {
    // 觸發 ZAP: 缺乏 X-Content-Type-Options 等安全標頭
    // 觸發 SonarQube: 反射型 XSS 漏洞 (直接將 Input 吐回給前端而未過濾)
    const name = req.query.name || "Guest";
    res.send(`<h1>Hello, ${name}</h1>`); 
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});
