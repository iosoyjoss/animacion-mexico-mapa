var overflowOfTweens,
    tl = new TimelineLite();

tl.set('svg', {visibility: 'visible'})
  .set(['#ave','.obj','#hojas'], {scale:0, transformOrigin: '50% 50%'})
  .to('#ave', 1, {scale:1, transformOrigin: '50% 50%', ease:Elastic.easeInOut}, '+=0')
  .staggerTo('.obj', 1, {scale:1, transformOrigin: '50% 50%', ease:Elastic.easeInOut}, 0.1, '-=0.25')
  
