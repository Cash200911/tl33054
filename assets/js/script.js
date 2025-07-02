// 您可以在这里添加JavaScript代码来增强网站的互动性
// 例如，您可以添加一个平滑滚动到页面锚点的功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认的页面跳转行为

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // 平滑滚动
            });
        }
    });
});

// 您还可以添加一些动画效果，或者处理表单提交等
