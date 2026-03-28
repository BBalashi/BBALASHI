const nav = document.querySelector('nav')
const hero = document.querySelector('header')
const backToTop = document.querySelector('#back-to-top')
const titles = ['Data Analyst', 'Full-Stack Developer', 'Problem Solver', 'Builder']
let currentIndex = 0
const cyclingTitle = document.querySelector('#cycling-title')
const ctx = document.getElementById('chart-data').getContext('2d')
const ctx2 = document.getElementById('chart-dev').getContext('2d')
const ctx3 = document.getElementById('chart-tools').getContext('2d')

window.addEventListener('scroll', function() {
    if (hero.getBoundingClientRect().bottom < 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
    }
    if (window.scrollY > 100) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible')
    }
})

backToTop.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

setInterval(function () {
    currentIndex = (currentIndex + 1) % titles.length
    cyclingTitle.textContent = titles[currentIndex]
}, 1000)

const hamburger = document.querySelector('#hamburger')
const sidebar = document.querySelector('#sidebar')

hamburger.addEventListener('click', function() {
    sidebar.classList.toggle('open')
})

const glowPlugin = {
    id: 'glowPoints',
    beforeDatasetDraw(chart) {
        chart.ctx.shadowBlur = 12;
        chart.ctx.shadowColor = 'rgba(249, 168, 212, 0.8)';
    },
    afterDatasetDraw(chart) {
        chart.ctx.shadowBlur = 0;
        chart.ctx.shadowColor = 'transparent';
    }
}

Chart.register(glowPlugin)

const mobileQuery = window.matchMedia('(max-width: 768px)')
const isMobile = mobileQuery.matches

const radarOptions = {
    layout: {
        padding: isMobile ? 50 : 50
    },
    scales: {
        r: {
            min: 0,
            max: 100,
            ticks: { display: false },
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
            pointLabels: {
                display: !isMobile,
                color: '#e5e5e5',
                padding: 7,
                font: { family: 'Space Mono', size: 11 }
            }
        }
    },
    plugins: {
        legend: { display: false }
    }
}

const chart1 = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Excel', 'Power BI', 'Tableau', 'Adobe Analytics', 'Google Analytics'],
        datasets: [{
            label: 'Data & Analytics',
            data: [95, 80, 65, 80, 80],
            backgroundColor: 'rgba(249, 168, 212, 0.2)',
            borderColor: '#f9a8d4',
            borderWidth: 2,
            pointBackgroundColor: ['#f9a8d4', '#c4b5fd', '#7dd3fc', '#6ee7b7', '#fca5a5'],
            pointBorderColor: ['#f9a8d4', '#c4b5fd', '#7dd3fc', '#6ee7b7', '#fca5a5'],
            pointRadius: 4,
        }]
    },
    options: radarOptions
})

const chart2 = new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['SQL', 'Python', 'HTML', 'CSS', 'Git'],
        datasets: [{
            label: 'Languages & Dev',
            data: [70, 60, 50, 70, 92],
            backgroundColor: 'rgba(249, 168, 212, 0.2)',
            borderColor: '#f9a8d4',
            borderWidth: 2,
            pointBackgroundColor: ['#f9a8d4', '#c4b5fd', '#7dd3fc', '#6ee7b7', '#fca5a5'],
            pointBorderColor: ['#f9a8d4', '#c4b5fd', '#7dd3fc', '#6ee7b7', '#fca5a5'],
            pointRadius: 4,
        }]
    },
    options: radarOptions
})

const chart3 = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: ['JIRA', 'MS Office Suite', 'Google Suite', 'MS SharePoint', 'PostgreSQL'],
        datasets: [{
            label: 'Tools & Productivity',
            data: [100, 100, 100, 75, 70],
            backgroundColor: 'rgba(249, 168, 212, 0.2)',
            borderColor: '#f9a8d4',
            borderWidth: 2,
            pointBackgroundColor: ['#f9a8d4', '#c4b5fd', '#7dd3fc', '#6ee7b7', '#fca5a5'],
            pointBorderColor: ['#f9a8d4', '#c4b5fd', '#7dd3fc', '#6ee7b7', '#fca5a5'],
            pointRadius: 4,
        }]
    },
    options: radarOptions
})

mobileQuery.addEventListener('change', function(e) {
    const mobile = e.matches
    ;[chart1, chart2, chart3].forEach(function(chart) {
        chart.options.layout.padding = mobile ? 20 : 50
        chart.options.scales.r.pointLabels.display = !mobile
        chart.update()
    })
})