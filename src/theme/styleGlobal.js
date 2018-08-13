import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,400');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
}

/* Animations */

@keyframes slideUp {
    from {
      top: 50%;
      transform: translateY(-50%) scale(1.3);
    }

    to {
      top: 0;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes shrink {
    from {
      height: 100vh;
    }

    to {
      height: 40vh;
    }
  }

  @keyframes aPath {
    from {
      stroke-dashoffset: 1107px;
      opacity: 0;
    }
    to {
      stroke-dashoffset: 0px;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    
    to {
      opacity: 1;
    }
  }

   @keyframes fadeOut {
    from {
      opacity: 1;
    }
    
    to {
      opacity: 0;
    }
`;
