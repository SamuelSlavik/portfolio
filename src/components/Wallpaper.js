import React from "react";
import { Link } from 'react-scroll'

class Wallpaper extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        let canvas = document.getElementById('nokey'),
            can_w = parseInt(canvas.getAttribute('width')),
            can_h = parseInt(canvas.getAttribute('height')),
            ctx = canvas.getContext('2d');

        let ball = {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                r: 0,
                alpha: 1,
                phase: 0
            },
            ball_color = {
                r: 204,
                g: 0,
                b: 82
            },
            R = 2,
            balls = [],
            alpha_f = 0.03,

            link_line_width = 0.8,
            dis_limit = 260;

        function getRandomSpeed(pos){
            let  min = -0.7,
                max = 0.7;
            switch(pos){
                case 'top':
                    return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
                    break;
                case 'right':
                    return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
                    break;
                case 'bottom':
                    return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
                    break;
                case 'left':
                    return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
                    break;
                default:
                    return;
                    break;
            }
        }
        function randomArrayItem(arr){
            return arr[Math.floor(Math.random() * arr.length)];
        }
        function randomNumFrom(min, max){
            return Math.random()*(max - min) + min;
        }
        console.log(randomNumFrom(0, 10));

        function getRandomBall(){
            let pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
            switch(pos){
                case 'top':
                    return {
                        x: randomSidePos(can_w),
                        y: -R,
                        vx: getRandomSpeed('top')[0],
                        vy: getRandomSpeed('top')[1],
                        r: R,
                        alpha: 1,
                        phase: randomNumFrom(0, 10)
                    }
                    break;
                case 'right':
                    return {
                        x: can_w + R,
                        y: randomSidePos(can_h),
                        vx: getRandomSpeed('right')[0],
                        vy: getRandomSpeed('right')[1],
                        r: R,
                        alpha: 1,
                        phase: randomNumFrom(0, 10)
                    }
                    break;
                case 'bottom':
                    return {
                        x: randomSidePos(can_w),
                        y: can_h + R,
                        vx: getRandomSpeed('bottom')[0],
                        vy: getRandomSpeed('bottom')[1],
                        r: R,
                        alpha: 1,
                        phase: randomNumFrom(0, 10)
                    }
                    break;
                case 'left':
                    return {
                        x: -R,
                        y: randomSidePos(can_h),
                        vx: getRandomSpeed('left')[0],
                        vy: getRandomSpeed('left')[1],
                        r: R,
                        alpha: 1,
                        phase: randomNumFrom(0, 10)
                    }
                    break;
            }
        }
        function randomSidePos(length){
            return Math.ceil(Math.random() * length);
        }

        function renderBalls(){
            Array.prototype.forEach.call(balls, function(b){
                if(!b.hasOwnProperty('type')){
                    ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
                    ctx.beginPath();
                    ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
                    ctx.closePath();
                    ctx.fill();
                }
            });
        }

        function updateBalls(){
            let new_balls = [];
            Array.prototype.forEach.call(balls, function(b){
                b.x += b.vx;
                b.y += b.vy;

                if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
                    new_balls.push(b);
                }

                // alpha change
                b.phase += alpha_f;
                b.alpha = Math.abs(Math.cos(b.phase));
                // console.log(b.alpha);
            });

            balls = new_balls.slice(0);
        }

        function renderLines(){
            let fraction, alpha;
            for (let i = 0; i < balls.length; i++) {
                for (let j = i + 1; j < balls.length; j++) {

                    fraction = getDisOf(balls[i], balls[j]) / dis_limit;

                    if(fraction < 1){
                        alpha = (1 - fraction).toString();

                        ctx.strokeStyle = 'rgba(204,204,204,'+alpha+')';
                        ctx.lineWidth = link_line_width;

                        ctx.beginPath();
                        ctx.moveTo(balls[i].x, balls[i].y);
                        ctx.lineTo(balls[j].x, balls[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        function getDisOf(b1, b2){
            let  delta_x = Math.abs(b1.x - b2.x),
                delta_y = Math.abs(b1.y - b2.y);

            return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
        }

        function addBallIfy(){
            if(balls.length < 20){
                balls.push(getRandomBall());
            }
        }

        function render(){
            ctx.clearRect(0, 0, can_w, can_h);

            renderBalls();

            renderLines();

            updateBalls();

            addBallIfy();

            window.requestAnimationFrame(render);
        }

        function initBalls(num){
            for(let i = 1; i <= num; i++){
                balls.push({
                    x: randomSidePos(can_w),
                    y: randomSidePos(can_h),
                    vx: getRandomSpeed('top')[0],
                    vy: getRandomSpeed('top')[1],
                    r: R,
                    alpha: 1,
                    phase: randomNumFrom(0, 10)
                });
            }
        }

        function initCanvas(){
            canvas.setAttribute('width', window.innerWidth);
            canvas.setAttribute('height', window.innerHeight);

            can_w = parseInt(canvas.getAttribute('width'));
            can_h = parseInt(canvas.getAttribute('height'));
        }
        window.addEventListener('resize', function(e){
            console.log('Window Resize...');
            initCanvas();
        });

        function goMovie(){
            initCanvas();
            initBalls(30);
            window.requestAnimationFrame(render);
        }
        goMovie();

    }

    render() {
        return (
            <div className={"wallpaper"}>
                <canvas className={"wallpaperCanvas"} id={"nokey"} width="100%" height="100%">
                    Your Browser Don't Support Canvas
                </canvas>
                <div className={"wallpaperContent"}>
                    <h1>Hello, I am <span className={'text--pink'}>Samuel</span>,<br/>your WebDeveloper</h1>
                    <br/>
                    <Link className={"wallpaperAnchor"} to={"navigation"} smooth={true} offset={50} duration={1000}>Continue to WebSite</Link>
                </div>
            </div>
        )
    }
}

export default Wallpaper