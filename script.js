// 漫画网站数据
const comicSites = [
    { id: 1, name: '腾讯动漫', url: 'https://ac.qq.com/', searchUrl: 'https://ac.qq.com/search/index?keyword=', icon: 'fab fa-tencent-weibo', color: '#1DA4F2', description: '正版漫画平台' },
    { id: 2, name: '快看漫画', url: 'https://www.kuaikanmanhua.com/', searchUrl: 'https://www.kuaikanmanhua.com/search?keyword=', icon: 'fas fa-eye', color: '#FF6B6B', description: '热门漫画聚集地' },
    { id: 3, name: '哔哩哔哩漫画', url: 'https://manga.bilibili.com/', searchUrl: 'https://manga.bilibili.com/search?keyword=', icon: 'fab fa-bilibili', color: '#FB7299', description: '二次元漫画社区' },
    { id: 4, name: '漫画台', url: 'https://www.manhuatai.com/', searchUrl: 'https://www.manhuatai.com/search.aspx?key=', icon: 'fas fa-book-open', color: '#4ECDC4', description: '海量漫画资源' },
    { id: 5, name: '知音漫客', url: 'https://www.zymk.cn/', searchUrl: 'https://www.zymk.cn/search/index?keyword=', icon: 'fas fa-star', color: '#FFE66D', description: '原创漫画平台' },
    { id: 6, name: '网易漫画', url: 'https://manhua.163.com/', searchUrl: 'https://manhua.163.com/search?keyword=', icon: 'fab fa-cloud', color: '#00C514', description: '网易旗下漫画平台' },
    { id: 7, name: '有妖气', url: 'https://www.u17.com/', searchUrl: 'https://www.u17.com/search/index.htm?keyword=', icon: 'fas fa-ghost', color: '#9B59B6', description: '原创漫画社区' },
    { id: 8, name: '咚漫', url: 'https://www.dongmanmanhua.cn/', searchUrl: 'https://www.dongmanmanhua.cn/search?keyword=', icon: 'fas fa-drum', color: '#E74C3C', description: '韩国漫画平台' },
    { id: 9, name: 'PODO漫画', url: 'https://www.podo.kr/', searchUrl: 'https://www.podo.kr/search?keyword=', icon: 'fas fa-feather', color: '#3498DB', description: '优质海外漫画' },
    { id: 10, name: '漫画岛', url: 'https://www.manhuadao.com/', searchUrl: 'https://www.manhuadao.com/search/?keyword=', icon: 'fas fa-island', color: '#2ECC71', description: '全彩漫画平台' },
    { id: 11, name: '爱漫画', url: 'https://www.imanhua.com/', searchUrl: 'https://www.imanhua.com/search.php?keyword=', icon: 'fas fa-heart', color: '#E91E63', description: '免费漫画资源' },
    { id: 12, name: '风车动漫', url: 'https://www.fengchedm.com/', searchUrl: 'https://www.fengchedm.com/search/?keyword=', icon: 'fas fa-wind', color: '#FF9800', description: '漫画动画综合' },
    { id: 13, name: '漫画屋', url: 'https://www.manhuawu.com/', searchUrl: 'https://www.manhuawu.com/search/?keyword=', icon: 'fas fa-home', color: '#607D8B', description: '精品漫画屋' },
    { id: 14, name: '漫客栈', url: 'https://www.mkzhan.com/', searchUrl: 'https://www.mkzhan.com/search?keyword=', icon: 'fas fa-store', color: '#7C4DFF', description: '国漫平台' },
    { id: 15, name: '动漫之家', url: 'https://www.dmzj.com/', searchUrl: 'https://www.dmzj.com/search.html?s=', icon: 'fas fa-home', color: '#00BCD4', description: '老牌漫画网站' },
    { id: 16, name: 'SF轻小说', url: 'https://www.sfacg.com/', searchUrl: 'https://www.sfacg.com/search?keywords=', icon: 'fas fa-book', color: '#FF5722', description: '小说漫画综合' }
];

// 漫画分类数据
const categories = [
    { id: 1, name: '热血', icon: 'fas fa-fire', color: '#FF6B6B', count: 5820 },
    { id: 2, name: '搞笑', icon: 'fas fa-laugh-beam', color: '#FFE66D', count: 3210 },
    { id: 3, name: '恋爱', icon: 'fas fa-heart', color: '#E91E63', count: 4560 },
    { id: 4, name: '冒险', icon: 'fas fa-compass', color: '#2196F3', count: 3890 },
    { id: 5, name: '玄幻', icon: 'fas fa-magic', color: '#9C27B0', count: 6120 },
    { id: 6, name: '都市', icon: 'fas fa-building', color: '#00BCD4', count: 2980 },
    { id: 7, name: '古风', icon: 'fas fa-paint-brush', color: '#FF9800', count: 2340 },
    { id: 8, name: '科幻', icon: 'fas fa-robot', color: '#4CAF50', count: 1890 },
    { id: 9, name: '悬疑', icon: 'fas fa-search', color: '#607D8B', count: 2670 },
    { id: 10, name: '校园', icon: 'fas fa-graduation-cap', color: '#8BC34A', count: 3120 },
    { id: 11, name: '竞技', icon: 'fas fa-trophy', color: '#FFD700', count: 1560 },
    { id: 12, name: '耽美', icon: 'fas fa-heart-pulse', color: '#F48FB1', count: 2230 },
    { id: 13, name: '百合', icon: 'fas fa-flower2', color: '#CE93D8', count: 1450 },
    { id: 14, name: '恐怖', icon: 'fas fa-skull', color: '#757575', count: 1780 },
    { id: 15, name: '历史', icon: 'fas fa-landmark', color: '#A1887F', count: 980 },
    { id: 16, name: '治愈', icon: 'fas fa-leaf', color: '#81C784', count: 2100 }
];

// 热门漫画数据（使用可靠的封面图片）
const hotComics = [
    { id: 1, title: '鬼灭之刃', cover: 'https://cdn.myanimelist.net/images/manga/3/223439.jpg', sites: ['腾讯动漫', '哔哩哔哩漫画'], update: '更新至第205话' },
    { id: 2, title: '海贼王', cover: 'https://cdn.myanimelist.net/images/manga/1/196441.jpg', sites: ['腾讯动漫', '快看漫画'], update: '更新至第1090话' },
    { id: 3, title: '进击的巨人', cover: 'https://cdn.myanimelist.net/images/manga/2/164363.jpg', sites: ['哔哩哔哩漫画'], update: '已完结' },
    { id: 4, title: '咒术回战', cover: 'https://cdn.myanimelist.net/images/manga/3/230467.jpg', sites: ['腾讯动漫', '快看漫画'], update: '更新至第240话' },
    { id: 5, title: '一拳超人', cover: 'https://cdn.myanimelist.net/images/manga/1/164673.jpg', sites: ['快看漫画', '哔哩哔哩漫画'], update: '更新至第280话' },
    { id: 6, title: '火影忍者', cover: 'https://cdn.myanimelist.net/images/manga/2/156491.jpg', sites: ['腾讯动漫'], update: '已完结' },
    { id: 7, title: '全职猎人', cover: 'https://cdn.myanimelist.net/images/manga/3/213277.jpg', sites: ['快看漫画'], update: '更新至第390话' },
    { id: 8, title: '死神', cover: 'https://cdn.myanimelist.net/images/manga/1/155583.jpg', sites: ['腾讯动漫', '哔哩哔哩漫画'], update: '更新至第700话' },
    { id: 9, title: '灌篮高手', cover: 'https://cdn.myanimelist.net/images/manga/1/190441.jpg', sites: ['快看漫画'], update: '已完结' },
    { id: 10, title: '间谍过家家', cover: 'https://cdn.myanimelist.net/images/manga/2/229777.jpg', sites: ['腾讯动漫', '哔哩哔哩漫画'], update: '更新至第85话' },
    { id: 11, title: '电锯人', cover: 'https://cdn.myanimelist.net/images/manga/2/228567.jpg', sites: ['哔哩哔哩漫画'], update: '更新至第150话' },
    { id: 12, title: '东京复仇者', cover: 'https://cdn.myanimelist.net/images/manga/2/230521.jpg', sites: ['快看漫画', '腾讯动漫'], update: '更新至第270话' }
];

// 搜索建议数据
const searchSuggestions = [
    '鬼灭之刃', '海贼王', '进击的巨人', '咒术回战', '一拳超人',
    '火影忍者', '全职猎人', '死神', '灌篮高手', '间谍过家家',
    '电锯人', '东京复仇者', '我的英雄学院', '进击的巨人最终季',
    '咒术回战第二季', '海贼王最新话', '鬼灭之刃无限城篇'
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initSitesGrid();
    initCategoriesGrid();
    initHotGrid();
    initHistoryGrid();
    initSearch();
    initNavigation();
});

// 初始化网站导航网格
function initSitesGrid() {
    const grid = document.getElementById('sites-grid');
    comicSites.forEach(site => {
        const card = createSiteCard(site);
        grid.appendChild(card);
    });
}

// 创建网站卡片
function createSiteCard(site) {
    const card = document.createElement('div');
    card.className = 'site-card';
    card.innerHTML = `
        <i class="${site.icon}" style="color: ${site.color};"></i>
        <h3>${site.name}</h3>
        <p>${site.description}</p>
    `;
    
    card.addEventListener('click', () => {
        addToHistory({ type: 'site', name: site.name, url: site.url });
        window.open(site.url, '_blank');
    });
    
    return card;
}

// 初始化分类网格
function initCategoriesGrid() {
    const grid = document.getElementById('categories-grid');
    categories.forEach(category => {
        const card = createCategoryCard(category);
        grid.appendChild(card);
    });
}

// 创建分类卡片
function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
        <i class="${category.icon}" style="color: ${category.color};"></i>
        <h3>${category.name}</h3>
        <p>${category.count.toLocaleString()}部漫画</p>
    `;
    
    card.addEventListener('click', () => {
        searchComicsByCategory(category.name);
    });
    
    return card;
}

// 初始化热门漫画网格
function initHotGrid() {
    const grid = document.getElementById('hot-grid');
    hotComics.forEach(comic => {
        const card = createHotCard(comic);
        grid.appendChild(card);
    });
}
// 创建热门漫画卡片
function createHotCard(comic) {
    const card = document.createElement('div');
    card.className = 'hot-card';
    card.innerHTML = `
        <img src="${comic.cover}" alt="${comic.title}" onerror="this.outerHTML='<div class=\\'cover-placeholder\\' style=\\'background: linear-gradient(135deg, #667eea, #764ba2);\\'><i class=\\'fas fa-image\\'></i></div>'">
        <div class="hot-card-content">
            <h3 class="hot-card-title">${comic.title}</h3>
            <div class="hot-card-info">
                <span>${comic.update}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        // 直接跳转到第一个支持平台的搜索结果页面
        const site = comicSites.find(s => comic.sites.includes(s.name));
        if (site) {
            const searchUrl = site.searchUrl + encodeURIComponent(comic.title);
            addToHistory({ type: 'site', name: site.name, url: site.url });
            window.open(searchUrl, '_blank');
        }
    });
    
    return card;
}

// 初始化浏览历史
function initHistoryGrid() {
    const history = getHistory();
    const grid = document.getElementById('history-list');
    
    if (history.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <p>暂无浏览记录</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = '';
    
    history.forEach(item => {
        const card = createHistoryCard(item);
        grid.appendChild(card);
    });
}

// 创建历史记录卡片
function createHistoryCard(item) {
    const card = document.createElement('div');
    card.className = 'site-card';
    card.innerHTML = `
        <i class="${item.type === 'site' ? 'fas fa-globe' : 'fas fa-book-open'}"></i>
        <h3>${item.name}</h3>
        <p>${item.type === 'site' ? '漫画网站' : '漫画搜索'}</p>
    `;
    
    card.addEventListener('click', () => {
        if (item.url) {
            window.open(item.url, '_blank');
        } else {
            showSearchResults(item.name);
        }
    });
    
    return card;
}

// 获取浏览历史
function getHistory() {
    const history = localStorage.getItem('comicHistory');
    return history ? JSON.parse(history) : [];
}

// 添加到浏览历史
function addToHistory(item) {
    const history = getHistory();
    const exists = history.find(h => h.name === item.name);
    
    if (exists) {
        history.splice(history.indexOf(exists), 1);
    }
    
    history.unshift(item);
    
    if (history.length > 10) {
        history.pop();
    }
    
    localStorage.setItem('comicHistory', JSON.stringify(history));
    initHistoryGrid();
}

// 初始化搜索功能
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    // 搜索建议
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const suggestions = searchSuggestions.filter(s => 
            s.toLowerCase().includes(query)
        ).slice(0, 5);
        
        // 可以在这里添加搜索建议下拉框
        console.log('Suggestions:', suggestions);
    });
}

// 执行搜索
function performSearch(query) {
    if (!query.trim()) {
        return;
    }
    
    addToHistory({ type: 'search', name: query });
    showSearchResults(query);
}

// 显示搜索结果
function showSearchResults(query) {
    const modal = document.getElementById('search-modal');
    const resultsContainer = document.getElementById('search-results');
    const lowerQuery = query.toLowerCase();
    
    // 搜索漫画标题
    const comicResults = hotComics.filter(comic => 
        comic.title.toLowerCase().includes(lowerQuery)
    );
    
    // 搜索漫画网站
    const siteResults = comicSites.filter(site => 
        site.name.toLowerCase().includes(lowerQuery)
    );
    
    // 搜索分类
    const categoryResults = categories.filter(cat => 
        cat.name.toLowerCase().includes(lowerQuery)
    );
    
    if (comicResults.length === 0 && siteResults.length === 0 && categoryResults.length === 0) {
        // 未找到结果，显示推荐漫画
        resultsContainer.innerHTML = `
            <div class="search-no-results">
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>未找到相关结果：${query}</p>
                    <p style="margin-top: 10px; font-size: 14px; color: rgba(255,255,255,0.7);">试试这些热门漫画</p>
                </div>
                <div class="search-recommendations">
                    <h4>热门推荐</h4>
                    <div class="recommend-grid">
                        ${hotComics.slice(0, 4).map(comic => `
                            <div class="recommend-item" data-title="${comic.title}">
                                <img src="${comic.cover}" alt="${comic.title}">
                                <span>${comic.title}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // 添加推荐项点击事件
        const recommendItems = resultsContainer.querySelectorAll('.recommend-item');
        recommendItems.forEach((item) => {
            item.addEventListener('click', () => {
                const title = item.dataset.title;
                const comic = hotComics.find(c => c.title === title);
                if (comic) {
                    const site = comicSites.find(s => comic.sites.includes(s.name));
                    if (site) {
                        const searchUrl = site.searchUrl + encodeURIComponent(comic.title);
                        window.open(searchUrl, '_blank');
                    }
                }
                modal.classList.remove('active');
            });
        });
    } else {
        // 显示搜索结果
        let html = '';
        
        // 显示漫画结果
        if (comicResults.length > 0) {
            html += `
                <div class="search-section">
                    <h4><i class="fas fa-book"></i> 漫画 (${comicResults.length})</h4>
                    <div class="search-results-grid">
                        ${comicResults.map(comic => `
                            <div class="search-result-item">
                                <img src="${comic.cover}" alt="${comic.title}">
                                <div class="search-result-info">
                                    <h4 class="search-result-title">${comic.title}</h4>
                                    <div class="search-result-sites">
                                        ${comic.sites.map(site => `<span>${site}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // 显示网站结果
        if (siteResults.length > 0) {
            html += `
                <div class="search-section">
                    <h4><i class="fas fa-globe"></i> 漫画网站 (${siteResults.length})</h4>
                    <div class="search-sites-grid">
                        ${siteResults.map(site => `
                            <div class="site-card" style="background: rgba(255,255,255,0.05);">
                                <i class="${site.icon}" style="color: ${site.color};"></i>
                                <h3>${site.name}</h3>
                                <p>${site.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // 添加网站点击事件
            setTimeout(() => {
                const siteCards = resultsContainer.querySelectorAll('.site-card');
                siteCards.forEach((card, index) => {
                    const site = siteResults[index];
                    card.addEventListener('click', () => {
                        window.open(site.url, '_blank');
                        modal.classList.remove('active');
                    });
                });
            }, 100);
        }
        
        // 显示分类结果
        if (categoryResults.length > 0) {
            html += `
                <div class="search-section">
                    <h4><i class="fas fa-tags"></i> 分类 (${categoryResults.length})</h4>
                    <div class="search-categories-grid">
                        ${categoryResults.map(cat => `
                            <div class="category-card" style="background: rgba(255,255,255,0.05);">
                                <i class="${cat.icon}" style="color: ${cat.color};"></i>
                                <h3>${cat.name}</h3>
                                <p>${cat.count.toLocaleString()}部漫画</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // 添加分类点击事件
            setTimeout(() => {
                const categoryCards = resultsContainer.querySelectorAll('.category-card');
                categoryCards.forEach((card, index) => {
                    const cat = categoryResults[index];
                    card.addEventListener('click', () => {
                        searchComicsByCategory(cat.name);
                    });
                });
            }, 100);
        }
        
        resultsContainer.innerHTML = html;
    }
    
    modal.classList.add('active');
    
    // 添加漫画结果点击跳转功能
    if (comicResults.length > 0) {
        const resultItems = resultsContainer.querySelectorAll('.search-result-item');
        resultItems.forEach((item, index) => {
            const comic = comicResults[index];
            item.addEventListener('click', () => {
                const site = comicSites.find(s => comic.sites.includes(s.name));
                if (site) {
                    const searchUrl = site.searchUrl + encodeURIComponent(comic.title);
                    window.open(searchUrl, '_blank');
                }
                modal.classList.remove('active');
            });
        });
    }
}

// 按分类搜索
function searchComicsByCategory(category) {
    const modal = document.getElementById('search-modal');
    const resultsContainer = document.getElementById('search-results');
    
    // 显示分类搜索结果（显示热门漫画作为推荐）
    resultsContainer.innerHTML = hotComics.slice(0, 6).map(comic => `
        <div class="search-result-item">
            <img src="${comic.cover}" alt="${comic.title}">
            <div class="search-result-info">
                <h4 class="search-result-title">${comic.title}</h4>
                <div class="search-result-sites">
                    ${comic.sites.map(site => `<span>${site}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // 添加点击跳转功能
    const resultItems = resultsContainer.querySelectorAll('.search-result-item');
    resultItems.forEach((item, index) => {
        const comic = hotComics[index];
        item.addEventListener('click', () => {
            const site = comicSites.find(s => comic.sites.includes(s.name));
            if (site) {
                const searchUrl = site.searchUrl + encodeURIComponent(comic.title);
                window.open(searchUrl, '_blank');
            }
            modal.classList.remove('active');
        });
    });
    
    modal.classList.add('active');
}

// 初始化导航
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // 关闭弹窗
    const modal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('search-modal-close');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// 页面滚动时更新导航状态
window.addEventListener('scroll', () => {
    const sections = ['home', 'sites', 'categories', 'hot', 'history'];
    let currentSection = 'home';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                currentSection = sectionId;
            }
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// 登录模态框
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const loginModalClose = document.getElementById('login-modal-close');
const loginMethodBtns = document.querySelectorAll('.login-method-btn');
const phoneLoginForm = document.getElementById('phone-login-form');
const wechatQrcode = document.getElementById('wechat-qrcode');
const qqQrcode = document.getElementById('qq-qrcode');
const sendCodeBtn = document.getElementById('send-code-btn');
const phoneLoginBtn = document.getElementById('phone-login-btn');
const userInfo = document.getElementById('user-info');
const userAvatar = document.getElementById('user-avatar');
const userUsername = document.getElementById('username');

function initLoginModal() {
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
    });

    loginModalClose.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    loginMethodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const method = btn.dataset.method;
            switchLoginMethod(method);
        });
    });

    sendCodeBtn.addEventListener('click', sendVerifyCode);
    phoneLoginBtn.addEventListener('click', performPhoneLogin);

    checkLoginStatus();
}

function switchLoginMethod(method) {
    phoneLoginForm.style.display = 'none';
    wechatQrcode.style.display = 'none';
    qqQrcode.style.display = 'none';

    if (method === 'phone') {
        phoneLoginForm.style.display = 'block';
    } else if (method === 'wechat') {
        wechatQrcode.style.display = 'block';
    } else if (method === 'qq') {
        qqQrcode.style.display = 'block';
    }
}

let countdown = 60;
let countdownTimer = null;

function sendVerifyCode() {
    const phoneInput = document.getElementById('phone-number');
    const phone = phoneInput.value.trim();

    if (!phone || phone.length !== 11) {
        alert('请输入正确的11位手机号');
        return;
    }

    sendCodeBtn.disabled = true;
    sendCodeBtn.textContent = `${countdown}秒后重试`;

    countdownTimer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(countdownTimer);
            sendCodeBtn.disabled = false;
            sendCodeBtn.textContent = '获取验证码';
            countdown = 60;
        } else {
            sendCodeBtn.textContent = `${countdown}秒后重试`;
        }
    }, 1000);

    console.log('发送验证码到:', phone);
    alert(`验证码已发送至 ${phone}`);
}

function performPhoneLogin() {
    const phone = document.getElementById('phone-number').value.trim();
    const code = document.getElementById('verify-code').value.trim();
    const agreeTerms = document.getElementById('agree-terms').checked;

    if (!phone || phone.length !== 11) {
        alert('请输入正确的11位手机号');
        return;
    }

    if (!code || code.length !== 6) {
        alert('请输入6位验证码');
        return;
    }

    if (!agreeTerms) {
        alert('请同意用户协议和隐私政策');
        return;
    }

    const user = {
        id: Date.now(),
        phone: phone,
        username: `用户${phone.slice(-4)}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${phone}`,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem('comicUser', JSON.stringify(user));
    loginModal.classList.remove('active');
    updateUserUI(user);
    alert('登录成功！');
}

function checkLoginStatus() {
    const userData = localStorage.getItem('comicUser');
    if (userData) {
        const user = JSON.parse(userData);
        updateUserUI(user);
    }
}

function updateUserUI(user) {
    loginBtn.style.display = 'none';
    userInfo.style.display = 'flex';
    userAvatar.src = user.avatar;
    userUsername.textContent = user.username;
}

function logout() {
    localStorage.removeItem('comicUser');
    userInfo.style.display = 'none';
    loginBtn.style.display = 'flex';
    alert('已退出登录');
}

function showMySection() {
    const mySection = document.getElementById('my');
    if (mySection) {
        mySection.style.display = 'block';
        mySection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 页面加载完成后初始化登录
document.addEventListener('DOMContentLoaded', () => {
    initLoginModal();
});
