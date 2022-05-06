export const  navAnimation={
    hidden:{
        opacity:1,
        sacle:0

    },
    visible:{
        opacity:1,
        sacle:1,
        transition:{
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

export const introAnim={
    hidden:{y:-600},
    show:{
        y:0,
        transition:{ duration:2,ease:"easeOut" }
    }
}


export const projectsAnim={
    hidden:{opacity:0 , scale:1.2,duration:0.5},
    show:{opacity:1 ,scale:1 ,
      transition:{duration:0.5,}
  }
        
}

