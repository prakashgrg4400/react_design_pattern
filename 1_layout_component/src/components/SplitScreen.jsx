import { styled } from "styled-components";
//==> Here we are using "styled-components" to style our html elements. We have to install using "npm install styled-components" . Then import "styled" from "styled-components" . And use "styled" object as it has all the html element as its property, and start styling using   " template literals-->``  "  and write all the css inside this template literals as shown below .

//--> Now container is storing a div whose display is flex and has border as shown below. So now if you want to use a div with display flex style, than instead styling each div with display flex, you can just directly use "Container" as a div.  Same goes for Panel too
const Container = styled.div`
    display: flex;
    border: 2px solid black;
`;

const Panel = styled.div`
    flex: 1;
`;

//!==> below line 15 comments is to ignore the error created by eslint , which says we need to define the type for the props which is passed as a component. You can either define it using "prop types" module or ignore it using eslint quik fixes .
// eslint-disable-next-line react/prop-types
export const SplitScreen = ({ Left, Right }) => {
    // return (
    //     <div>
    //         <div>
    //             <Left />
    //         </div>
    //         <div>
    //             <Right />
    //         </div>
    //     </div>
    // );
    return (
        <Container>
            <Panel>
                <Left />
            </Panel>
            <Panel>
                <Right />
            </Panel>
        </Container>
    );
};
