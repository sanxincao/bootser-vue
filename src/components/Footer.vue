<template>
    <div class="footer">
      <div class="links">
        <a href="#">相关链接1</a>
        <a href="#">相关链接2</a>
        <a href="#">相关链接3</a>
      </div>
      <div class="disclaimer">
        <p>本站域名：example.com</p>
        <p>本站符合审核声明</p>
      </div>
    </div>
  </template>
  
  <style>
  .footer {
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .links {
    display: flex;
  }
  
  .links a {
    margin-right: 16px;
    color: #333;
    text-decoration: none;
  }
  
  .disclaimer {
    font-size: 14px;
    color: #999;
  }
  </style>