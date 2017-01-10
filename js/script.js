window.onload = function(){
        
   arrowDown = document.getElementById('arrowDown')
    arrowDown.onmouseover = function(){
        arrowDown.style.backgroundColor = 'blue'
        arrowDown.style.transform = 'scale(1.3)'
        
    }
    arrowDown.onmouseout = function(){
        arrowDown.style.backgroundColor = 'inherit'
        arrowDown.style.transform = 'scale(1)'
    }
    
    
    var work1 = document.getElementById('work1');
    work1.onmouseover = function(){
        work1.style.transform = 'scale(1.2)';
        work1.style.transition = '1s';
        work1.style.opacity = '1';
    }
    work1.onmouseout = function(){
        work1.style.transform = 'scale(1.0)';
        work1.style.transition = '1s';
        work1.style.opacity = '0.6';
    }
    work1.onclick = function() {
        window.open('https://alexmovchan.github.io/project_brain1/', '_blank');
    }
    
    
        var work2 = document.getElementById('work2');
    work2.onmouseover = function(){
        work2.style.transform = 'scale(1.2)';
        work2.style.transition = '1s';
        work2.style.opacity = '1';
    }
    work2.onmouseout = function(){
        work2.style.transform = 'scale(1.0)';
        work2.style.transition = '1s';
        work2.style.opacity = '0.6';
    }
    work2.onclick = function() {
        window.open('https://alexmovchan.github.io/yagotyn/', '_blank');
    }
    
    
    
        var work3 = document.getElementById('work3');
    work3.onmouseover = function(){
        work3.style.transform = 'scale(1.2)';
        work3.style.transition = '1s';
        work3.style.opacity = '1';
    }
    work3.onmouseout = function(){
        work3.style.transform = 'scale(1.0)';
        work3.style.transition = '1s';
        work3.style.opacity = '0.6';
    }
    work3.onclick = function() {
        window.open('https://alexmovchan.github.io/adaptive1/', '_blank');  
    }



    var work4 = document.getElementById('work4');
    work4.onmouseover = function(){
        work4.style.transform = 'scale(1.2)';
        work4.style.transition = '1s';
        work4.style.opacity = '1';
    }
    work4.onmouseout = function(){
        work4.style.transform = 'scale(1.0)';
        work4.style.transition = '1s';
        work4.style.opacity = '0.6';
    }
    work4.onclick = function() {
        window.open('https://alexmovchan.github.io/project_brain2/', '_blank');  
    }
}