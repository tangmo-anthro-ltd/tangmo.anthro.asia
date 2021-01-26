import * as React from 'react'
import {Button, Container, Form} from "react-bootstrap"
import Layout from "../../components/layout"
import { useIntl } from "gatsby-plugin-intl"
import {Link} from "gatsby";

export default ({data}) => {
    const {formatMessage} = useIntl();
    const [coupon, setCoupon] = React.useState('');
    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const couponParam = urlParams.get('coupon');
        if (couponParam) {
            setCoupon(couponParam);
        }
    }, []);
    return <Layout>
        <Container>
            <Form action="/about">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Telegram</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="@SeaSaltTheDog"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Date/Time</label>
                    <div className="col-sm-10">
                        <input type="datetime-local" className="form-control" min="2021-01-01T00:00"/>
                        <small className="form-text text-muted">
                            (Your browser's local time)
                        </small>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Duration</label>
                    <div className="col-sm-10">
                        <select className="form-control">
                            <option>30 minutes</option>
                            <option>1 hour</option>
                            <option>1.5 hour</option>
                            <option>2 hours</option>
                            <option>3 hours</option>
                            <option>4 hours</option>
                            <option>6 hours</option>
                            <option>8 hours</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Coupon code</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={coupon} onChange={(e)=>setCoupon(e.target.value)}/>
                        <small className="form-text text-muted">
                            (optional)
                        </small>
                    </div>
                </div>
                <div className="form-group">
                    <Link to="/booking_app/result.aspx" className="btn btn-primary">Book my body</Link>
                </div>
            </Form>
        </Container>
    </Layout>;
};
