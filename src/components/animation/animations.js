
import { gsap, TweenMax, TweenLite, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// navbar open / close 
export const clickMobileNavMenu = (node, nodeClose, nodeLinks) => {

    TweenMax.to(node, 1, {width: "100vw"})
    TweenMax.fromTo(
      nodeClose,
      1,
      { autoAlpha: 0 },
      { autoAlpha: 1, delay: 0.2 }
    );
    TweenMax.fromTo(
      nodeLinks,
      1,
      {
        top: "15%",
        left: "0%",
        translate: "transform(-50%, -50%)",
        opacity: 0,
      },
      {
        top: "15%",
        left: "14%",
        translate: "transform(-50%, -50%)",
        opacity: 1,
        delay: 0.95,
      },
      2
    );
 
  
};

export const clickMobNavClose = (node, nodeClose, nodeLinks) => {
  TweenMax.to(nodeClose, 0.4, { autoAlpha: 0, delay: 0.1 });
  TweenMax.fromTo(nodeLinks, 0.95, { opacity: 1 }, { opacity: 0 });
  TweenMax.to(node, 1, { width: 0 }, 1);
};

// navbar on page load

export const navPageLoad = (node) => {
  TweenLite.fromTo(node, 5, 
    {
      autoAlpha: 1
    },
    {
    autoAlpha: 1
  })
}

//navbar from transperant after leaving hero section
export const nav2trans = (node, trigger) => {
    TweenMax.fromTo(
        node, 1,
        {
          backgroundColor:"transparent",
       
        },
          
        {
          backgroundColor:"#ffffff",
       
          
          scrollTrigger: {
            id: "navbar",
            trigger: trigger,
            start: "top top",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
}

// hero animations box

export const heroBoxTrans = (node, nodeTextBoxText, nodeTextBoxTexth3) => {
  const tl = new TimelineLite()
  tl.fromTo(
    node,
    .5,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
    }
  );
  
  tl.fromTo(
    nodeTextBoxText,
    1,
    {
      autoAlpha: 0,
      color: "#f0c751"
    },
    {
     color: "#0d6989",
      autoAlpha: 1,
    }
  );
  tl.fromTo(
    nodeTextBoxTexth3,
    .5,
    {
      autoAlpha: 0,
      color: "#f0c751"
    },
    {
     color: "#0d6989",
      autoAlpha: 1,
    }
  );
}


// Pic left side 

//text side
export const picLeftSideTextBox = (node, trigger) => {
    TweenMax.from(
        node,
    
        {
          duration: .5,
          x: "10vw",
          delay: .75,
          ease: `none`,
          scrollTrigger: {
            id: "id",
            trigger: trigger,
            start: "top bottom+=500",
            toggleActions: "play none none reverse",
            // markers: true
          },
        }
      );
}

// Animate text after box enter

export const picLeftSideTextBoxText = (node, trigger) => {
    TweenMax.fromTo(
        node,
        .75,
        {
          autoAlpha: 0,
          opacity: 0
        },
        {
          
          autoAlpha: 1,
          ease: `none`,
         delay: .75,
          scrollTrigger: {
            id: "id",
            trigger: trigger,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
}

export const picLeftSidePicBox = (node, trigger) => {
    TweenMax.from(
        node,
  
        {
          duration: 0.75,
          x: "-30vw",
          autoAlpha: 0,
          ease: `none`,
          scrollTrigger: {
            id: "idpicbox",
            trigger: trigger,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
}


// right side text box animations

export const picRightSideTextBox = (node, trigger) => {
    TweenMax.fromTo(
        node,
        1,
        {
          autoAlpha: 0,
          x: "-30vw"
        },
        {
          duration: 0.25,
          autoAlpha: 1,
          x: "0vw",
          ease: `none`,
          
          scrollTrigger: {
            id: "id",
            trigger: trigger,
            start: "top center+=100",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );

}

export const picRightSideTextBoxText = (node, trigger) => {
    TweenMax.fromTo(
        node,
        1,
        {
          autoAlpha: 0,
        },
        {
          duration: 0.75,
          autoAlpha: 1,
          ease: `none`,
          scrollTrigger: {
            id: "id",
            trigger: trigger,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
}

export const picRightSidePicBox = (node, trigger) => {
    TweenMax.from(
        node,
  
        {
          duration: 0.75,
          x: "30vw",
          autoAlpha: 0,
          ease: `none`,
          scrollTrigger: {
            id: "id",
            trigger: trigger,
            start: "top center+=100",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
      
}

