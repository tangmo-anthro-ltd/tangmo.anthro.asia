import * as React from 'react'
import {Button, Container, Form} from "react-bootstrap"
import Layout from "../../components/layout"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
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
            <h1><FormattedMessage id="bookingApp.booking.title"/></h1>
            <p><FormattedMessage id="bookingApp.booking.intro"/></p>
            <Form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        <FormattedMessage id="bookingApp.booking.form_telegram"/>
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="@SeaSaltTheDog"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        <FormattedMessage id="bookingApp.booking.form_date_time"/>
                    </label>
                    <div className="col-sm-10">
                        <input type="datetime-local" className="form-control" min="2021-01-01T00:00"/>
                        <small className="form-text text-muted">
                            <FormattedMessage id="bookingApp.booking.form_date_time_hint"/>
                        </small>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        <FormattedMessage id="bookingApp.booking.form_duration"/>
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control">
                            {/* I would have used react-intl-formatted-duration, but that require base `react-intl`, not the one via gatsby-plugin-intl*/}
                            {/* I should also use FormattedMessage's plural, at least. Send me a PR. */}
                            <option><FormattedMessage id="bookingApp.booking.form_duration_option_1"/></option>
                            <option><FormattedMessage id="bookingApp.booking.form_duration_option_2"/></option>
                            <option><FormattedMessage id="bookingApp.booking.form_duration_option_3"/></option>
                            <option><FormattedMessage id="bookingApp.booking.form_duration_option_4"/></option>
                            <option><FormattedMessage id="bookingApp.booking.form_duration_option_5"/></option>
                            <option><FormattedMessage id="bookingApp.booking.form_duration_option_6"/></option>
                            <option><FormattedMessage id="bookingApp.booking.form_duration_option_7"/></option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        <FormattedMessage id="bookingApp.booking.form_coupon_code"/>
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={coupon} onChange={(e)=>setCoupon(e.target.value)}/>
                        <small className="form-text text-muted">
                            <FormattedMessage id="bookingApp.booking.form_coupon_code_hint"/>
                        </small>
                    </div>
                </div>
                <div className="form-group">
                    <label>
                        <FormattedMessage id="bookingApp.booking.form_info"/>
                    </label>
                    <textarea className="form-control"/>
                </div>
                <p><FormattedMessage id="bookingApp.booking.form_notice"/></p>
                <div className="form-group">
                    <Link to="/bookingApp/result.aspx" className="btn btn-primary">
                        <FormattedMessage id="bookingApp.booking.form_submit"/>
                    </Link>
                </div>
            </Form>
        </Container>
    </Layout>;
};
