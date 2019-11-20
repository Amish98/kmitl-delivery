import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deliveryExpress } from '../../store/actions/deliveryActions'
import { Redirect } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, } from 'reactstrap';
import { Container, Col, Row, Toast, ToastBody, ToastHeader, CustomInput } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import { Media } from 'reactstrap';
import { useState } from 'react';
import { Button, Fade } from 'reactstrap';
import { summarizers } from 'istanbul-lib-report';



class delivery extends Component {
    state = {
        name: '',
        PhoneNumber: '',
        other: '',
        destinationName: '',
        destinationPhoneNumber: '',
        destinationOther: '',

        routePickup: '',
        routeDropoff: '',

        Service: '',
        result: '',

        ServicePurchase: '',
        ServiceRoundTrip: '',
        ServiceFoodDelivery: ''
    }

    // handleClick = e => {
    //     this.setState({ clicked: true })
    //     console.dir(this.state)
    // }


    handleChange2 = e => {
        this.setState({
            [e.target.name]: e.target.id

        })
        /*check state*/
        console.dir(this.state)
        console.log(this.state.ServicePurchase)
        console.log(this.state.ServiceRoundTrip)
        console.log(this.state.ServiceFoodDelivery)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

        /*check state*/
        console.dir(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.deliveryExpress(this.state);
        this.props.history.push('/manage');

        /*check state*/
        console.dir(this.state)
    }
    /* function */
    amish = (pickup, dropoff, Service, ServicePurchase, ServiceRoundTrip, ServiceFoodDelivery, state) => {
        var distance = [
            [0, 5, 5, 5, 5, 7],
            [5, 0, 6, 5, 7, 7],
            [5, 6, 0, 6, 7, 9],
            [5, 4, 6, 0, 7, 9],
            [5, 7, 7, 7, 0, 5],
            [7, 7, 9, 9, 5, 0]
        ];
        var checkpoint = ['คณะวิศวกรรมศาสตร์', 'คณะสถาปัตยกรรมศาสตร์', 'คณะวิทยาศาสตร์',
            'สำนักงานหอสมุดกลาง', 'หอพักนักศึกษาสถาบัน', 'ศูนย์กีฬาพระจอมเกล้า']

        var s = checkpoint[0];
        var d = checkpoint[0];
        var AdditionalServices = 0;
        /*serching source & destination*/
        for (let i = 0; i < checkpoint.length; i++) {
            if (pickup == s) {
                for (let j = 0; j < checkpoint.length; j++) {
                    if (dropoff == d) {
                        console.log("P2P[" + i + "][" + j + "][" + s + "][" + d + "] = " + distance[i][j]);
                        var P2P = distance[i][j];
                        break;
                    }
                    else {
                        d = checkpoint[j + 1];
                    }
                }
                break;
            }
            else {
                s = checkpoint[i + 1];
            }
        }
        /*Service types*/
        if (Service == 'walkService') {
            Service = 30;
        }
        else if (Service == 'motorcycleService') {
            Service = 50;
        }
        else {
            Service = 0;
        }

        /*Additional Services*/
        if (ServicePurchase == 'additionalServicePurchase') {
            if (ServicePurchase == 'additionalServicePurchase' && ServiceRoundTrip == 'additionalServiceRoundTrip') {
                AdditionalServices = 55;
            } else {
                AdditionalServices = 25;
            }
        }
        else if (ServiceRoundTrip == 'additionalServiceRoundTrip') {
            AdditionalServices = 30;
        }
        else {
            AdditionalServices = 0
        }


        /*result*/
        var result = P2P + Service + AdditionalServices;
        /* Test */
        let branch = result;
        /*check state */
        console.log('Point to Point = ' + P2P + ' bath.');
        console.log('Service = ' + Service + ' bath.');
        console.log('AdditionalServices = ' + AdditionalServices + ' bath.');
        console.log('Total = ' + result + ' bath.')
        console.log(branch);
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />


        return (
            <div className="container">
                <div className="col-12">
                    <Card>
                        <CardBody>
                            <FormGroup row>
                                <Col sm={12}>
                                    <form className="white" onSubmit={this.handleSubmit}>

                                        <div class="jumbotron">
                                            <h1><dt>Welcome to KMITL Delivery Service</dt></h1>
                                            <p>ชี้แจงรายละเอียดเบื้องต้น</p>
                                        </div>

                                        <div class="row center">
                                            <div class="col-sm-6">
                                                <h5 class="card-title"><dt>WALK</dt></h5>
                                                <p class="card-text">ค่าบริการเริ่มต้น 30 บาท</p>
                                                <i class="large material-icons">directions_walk</i>
                                                <br />
                                                <p>
                                                    <label>
                                                        <input type="checkbox" name='Service'    
                                                            onClick={this.handleChange2} id="walkService" />
                                                        <span>Select Walk</span>
                                                    </label>
                                                </p>
                                                {/* <CustomInput type="switch" name='Service' onClick={this.handleChange2} id="walkService" label="Select Walk" /> */}
                                            </div>
                                            <div class="col-sm-6">
                                                <h5 class="card-title"><dt>MOTORCYCLE</dt></h5>
                                                <p class="text">ค่าบริการเริ่มต้น 50 บาท</p>
                                                <i class="large material-icons">directions_bike</i>
                                                <br />
                                                <p>
                                                    <label>
                                                        <input type="checkbox" name='Service'
                                                            onClick={this.handleChange2} id="motorcycleService" />
                                                        <span>Select Motorcycle</span>
                                                    </label>
                                                </p>

                                            </div>
                                        </div>


                                        {/* <h5 className='center'><dt>Additional Services</dt></h5> */}
                                        <div class="row center">
                                            <div class="col-sm-4">
                                                <h6 class="card-title"><dt>Purchase Service</dt></h6>
                                                <p class="text">ค่าบริการเริ่มต้น 25 บาท</p>
                                                <i class="large material-icons">add_shopping_cart</i>
                                                <br />
                                                <label>
                                                    <input type="checkbox" 
                                                    name="ServicePurchase" id="additionalServicePurchase"
                                                        onClick={this.handleChange2} />
                                                    <span>Select Purchase Service</span>
                                                </label>
                                            </div>


                                            <div class="col-sm-4" >
                                                <h6 class="card-title"><dt>Round Trip</dt></h6>
                                                <p class="text">ค่าบริการเริ่มต้น 30 บาท</p>
                                                <i class="large material-icons">loop</i>
                                                <br />
                                                <label>
                                                    <input type="checkbox" 
                                                    name="ServiceRoundTrip" id="additionalServiceRoundTrip"
                                                        onClick={this.handleChange2} />
                                                    <span>Select Round Trip</span>
                                                </label>
                                            </div>


                                            <div class="col-sm-4" >
                                                <h6 class="card-title"><dt>Food Delivery</dt></h6>
                                                <p class="text">ค่าบริการเริ่มต้น 0 บาท</p>
                                                <i class="large material-icons">local_dining</i>
                                                <br />
                                                <label>
                                                    <input type="checkbox"
                                                     name="ServiceFoodDelivery" id="additionalServiceFoodDelivery"
                                                        onClick={this.handleChange2} />
                                                    <span>Select Food Delivery</span>
                                                </label>
                                            </div>
                                        </div>


                                        <div class="alert alert-warning" >
                                            <strong>Warning!</strong> โปรดเลือกช่องทางการส่งสินค้า พร้อมระบุบริการเสริมที่ต้องการให้ครบ
                                        </div>

                                        <h2><dt>Pick up Location</dt></h2>
                                        <select class="browser-default" id="routePickup" required
                                            onChange={this.handleChange} >
                                            <option value="" disabled selected>Choose your location</option>
                                            <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                                            <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                                            <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                                            <option value="สำนักงานหอสมุดกลาง">สำนักงานหอสมุดกลาง</option>
                                            <option value="หอพักนักศึกษาสถาบันฯ">หอพักนักศึกษาสถาบันฯ</option>
                                            <option value="ศูนย์กีฬาพระจอมเกล้า">ศูนย์กีฬาพระจอมเกล้า</option>
                                        </select>
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                id='name'
                                                title="กรุณากรอกชื่อ"
                                                required
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="name">Name</label>
                                        </div>

                                        <div className="input-field">
                                            <input
                                                type="tel"
                                                pattern="[0-9]{10}"
                                                id='PhoneNumber'
                                                title="กรุณาใส่เบอร์โทรศัพท์ เป็นจำนวน 10 ตัวอักษร"
                                                required
                                                onChange={this.handleChange} />
                                            <label htmlFor="PhoneNumber">Phone Number</label>
                                        </div>

                                        <div className="input-field">
                                            <input
                                                type="text"
                                                id='other'
                                                title="เพิ่มเติม"
                                                onChange={this.handleChange} />
                                            <label htmlFor="other">Other</label>
                                        </div>



                                        <br />
                                        <br />
                                        <br />
                                        <h2><dt>Drop off Location</dt></h2>
                                        <select class="browser-default" id="routeDropoff" required onChange={this.handleChange} >
                                            <option value="" disabled selected>Choose your location</option>
                                            <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                                            <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                                            <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                                            <option value="สำนักงานหอสมุดกลาง">สำนักงานหอสมุดกลาง</option>
                                            <option value="หอพักนักศึกษาสถาบันฯ">หอพักนักศึกษาสถาบันฯ</option>
                                            <option value="ศูนย์กีฬาพระจอมเกล้า">ศูนย์กีฬาพระจอมเกล้า</option>
                                        </select>
                                        {/* <Label for="rout">Delivery Info</Label> */}
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                id='destinationName'
                                                title="กรุณากรอกชื่อ"
                                                required
                                                onChange={this.handleChange} />
                                            <label htmlFor="destinationName">Name</label>
                                        </div>

                                        <div className="input-field">
                                            <input
                                                type="tel"
                                                pattern="[0-9]{10}"
                                                id='destinationPhoneNumber'
                                                title="กรุณาใส่เบอร์โทรศัพท์ เป็นจำนวน 10 ตัวอักษร"
                                                required
                                                onChange={this.handleChange} />
                                            <label htmlFor="destiantionPhoneNumber">Phone Number</label>
                                        </div>

                                        <div className="input-field">
                                            <input
                                                type="text"
                                                id='destinationOther'
                                                title="เพิ่มเติม"
                                                onChange={this.handleChange} />
                                            <label htmlFor="destinationOther">Other</label>
                                        </div >



                                        <div class="alert alert-warning ">
                                            <strong>Warning!</strong> โปรดตรวจสอบความถูกต้องรายละเอียดต่างๆก่อนทำการยืนยัน
                                        </div>

                                        <button className="btn btn-success btn-md btn-block"
                                            onClick={this.amish(this.state.routePickup, this.state.routeDropoff, this.state.Service,
                                                this.state.ServicePurchase, this.state.ServiceRoundTrip, this.state.ServiceFoodDelivery)}
                                        ><dt>Submit</dt></button>
                                        {/* <Label>{this.state.result}</Label> */}
                                    </form>


                                </Col>
                            </FormGroup>
                        </CardBody>
                    </Card>

                </div>

            </div>


        )
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deliveryExpress: (deliveryProject) => dispatch(deliveryExpress(deliveryProject))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(delivery)