import React, {Component, PropTypes} from "react";
import {Grid, Row, Col, Image, PageHeader} from "react-bootstrap";

class Logo extends Component {
    render() {
        return (<Grid fluid={true}>
                <Row>
                    <Col xs={ 0 }
                         md={ 4 }
                         sm={ 4 }
                         lg={ 5 }> </Col>
                    <Col xs={ 3 }
                         md={ 4 }
                         sm={ 4 }
                         lg={ 2 }
                         xsHidden={false}>
                        <Image
                            src="https://raw.githubusercontent.com/Gott50/Code-Connect/master/uibuilder/src/client/assets/CClogo.png"
                            responsive={true}
                        ></Image>
                    </Col>
                    <Col xs={ 9 }
                         md={ 12 }
                         sm={ 12 }
                         lg={ 12 }>
                        <PageHeader style={ {fontFamily: 'awesome', textAlign: 'center'} }>
                                <span style={ {fontSize: '150%'} }>
                                Code Connect
                                </span>
                        </PageHeader>
                    </Col>
                </Row>
            </Grid>
        )
    }

}
export default Logo;