import { useEffect, useRef, memo } from "react";
import { challangePresentation } from "../utilis/utilis";
import { ReactComponent as IconLizard } from "../images/IconLizard.svg";
import { ReactComponent as IconPaper } from "../images/IconPaper.svg";
import { ReactComponent as IconRock } from "../images/IconRock.svg";
import { ReactComponent as IconSpock } from "../images/IconSpock.svg";
import { ReactComponent as IconScissors } from "../images/IconScissors.svg";
import { Row, Col, Button } from "react-bootstrap";

/* Shows the matchup  */
const Challange = memo(({ restartGame, yourPick, computerPick, result }) => {

/* Grab DOM elements */
  const refYourPick = useRef(null);
  const refComputerPick = useRef(null);
  const refResult = useRef(null);
  const refPlayAgain = useRef(null);

  const grabOnlyNameOfPick = (yourPick) => {
    const arrayOfClasses = yourPick.split(" ");
    return arrayOfClasses[0];
  };

/* Fired up the result animation */
  useEffect(() => {
    return yourPick
      ? challangePresentation(
          refYourPick,
          refComputerPick,
          refResult,
          refPlayAgain
        )
      : "";
  }, [yourPick]);

  return (
      <Row>
         <Col xs={{span: 6, order: 1}} sm={{span: true,order: 1}} className='ms-sm-5'>
            <h3 className='text-center mb-5' ref={refYourPick}>
               YOUR PICK
            </h3>  
            {yourPick.includes('lizard-icon') &&
               <div className={`${grabOnlyNameOfPick(yourPick)} pick mx-auto `}>
                  <IconLizard width='100%' height='100%' viewBox='-7 -14 80 88' />
               </div>
            }
            {yourPick.includes('spock-icon') &&
               <div className={`${grabOnlyNameOfPick(yourPick)} pick mx-auto `}>
                  <IconSpock width='100%' height='100%' viewBox='-22 -10 80 80' />
               </div>
            }
            {yourPick.includes('rock-icon') &&
               <div className={`${grabOnlyNameOfPick(yourPick)} pick mx-auto `}>
                  <IconRock width='100%' height='100%' viewBox='-15 -15 80 75' />
               </div>
            }
            {yourPick.includes('scissors-icon') &&
               <div className={`${grabOnlyNameOfPick(yourPick)} pick mx-auto `}>
                  <IconScissors width='100%' height='100%' viewBox='-14 -10 80 75' />
               </div>
            }
            {yourPick.includes('paper-icon') &&
               <div className={`${grabOnlyNameOfPick(yourPick)} pick mx-auto `}>
                  <IconPaper width='100%' height='100%' viewBox='-13 -9 80 75' />
               </div>
            }
         </Col>
         <Col xs={{order: 3}} sm={{span: true, order: 2}} className='d-flex flex-column justify-content-center align-items-center mt-5 mt-sm-0'>
            {/* Result */}
            {result && <p className='result' ref={refResult}>{result}</p>}
            {/* Play Again Btn */}
            {result && 
               <Button variant='light' className='fs-3 px-5 btn-restartGame' onClick={restartGame} ref={refPlayAgain} >
                  PLAY AGAIN
               </Button>   
            } 
         </Col>
         <Col xs={{span: 6,order: 2}} sm={{span: true, order: 3}} className='me-sm-5'>
            <h3 className='text-center mb-5' ref={refComputerPick}>
               COMPUTER PICK
            </h3>  
            {computerPick === 1 && 
               <div className="lizard-icon pick mx-auto">
                  <IconLizard width='100%' height='100%' viewBox='-7 -14 80 88' />
               </div>
            }
            {computerPick === 2 && 
               <div className="scissors-icon pick mx-auto">
                  <IconScissors width='100%' height='100%' viewBox='-14 -10 80 75' />
               </div>
            }
            {computerPick === 3 && 
               <div className="rock-icon pick mx-auto">
                  <IconRock width='100%' height='100%' viewBox='-15 -15 80 75' />
               </div>
            }
            {computerPick === 4 && 
               <div className="spock-icon pick mx-auto">
                  <IconSpock width='100%' height='100%' viewBox='-22 -10 80 80' />
               </div>
            }
            {computerPick === 5 && 
               <div className="paper-icon pick mx-auto">
                  <IconPaper width='100%' height='100%' viewBox='-13 -9 80 75' />
               </div>
            }
         </Col>
      </Row>
  );
});

export default Challange;
