    /*blog-filter-menu----------------------------*/
    $(document).on('click','.portfolio-filter li',function(){
        $(this).addClass('portfolio-filter-active').siblings().removeClass('portfolio-filter-active')
    });
    
    $(document).ready(function(){
        // Логіка фільтрації
        $('.list').click(function(){
            const value = $(this).attr('data-filter');
            if(value == 'all'){
                $('.portfolio-box').show('1000');
            }
            else{
                $('.portfolio-box').not('.'+value).hide('1000');
                $('.portfolio-box').filter('.'+value).show('1000');
            }
        });
    
        // Lightbox - перегляд фотографій
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
    
        // Перехід на фірму та GitHub при кліку на фотографію проекту
        $('.portfolio-box').click(function(e){
            e.preventDefault();
            let projectType = $(this).attr('data-lightbox'); // Отримуємо тип проекту
            // Додайте відповідні посилання для фірми та GitHub для кожного типу проекту
            let projectLinks = {
                'work': {
                    'website': 'URL для веб-сайту',
                    'github': 'https://github.com/Feevicun/portfolio.git'
                },
                'app': {
                    'website': 'URL для веб-сайту',
                    'github': 'URL для GitHub'
                },
                // Додайте інші типи проектів та відповідні посилання
            };
    
            // Перевірка, чи є посилання для відповідного типу проекту
            if(projectLinks[projectType]) {
                let websiteLink = projectLinks[projectType]['website'];
                let githubLink = projectLinks[projectType]['github'];
                // Перехід на посилання при кліку на фотографію проекту 
                // В цьому прикладі відкриваємо фірму у новій вкладці та GitHub в тій же вкладці
                window.open(websiteLink, '_blank');
                window.open(githubLink, '_self');
            }
        });
    });
    