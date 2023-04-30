import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import styles from '../styles/Signup.module.css';
import Header from 'molecule/Header'
import Footer from 'molecule/Footer'
import Card from 'atom/Card';
import RichTileButton from 'molecule/RichTileButton';
import Button from 'atom/Button';
import Field from 'atom/Field';
import CONSTANTS from 'src/utils/constants';

const Signup = () => {
  const [membershipSelection, setMembershipSelection] = useState<string>();
  const { query } = useRouter();
  const { firstName, lastName, id, state, age } = query;
  const target = `${firstName} ${lastName}`;
  const today = new Date();
  const oneweek = new Date(today.setDate(today.getDate() + 7))
  const TRIALENDDATE = oneweek.toISOString().split('T')[0];
  const BRAND = 'TESTING';
  const PHONE = '800-555-5555';

  return (
    <>
      <Head>
      </Head>
      <Header />
      <main className={styles.signupPage}>
        <h1>Final Step! You&apos;re 1 minute from viewing <span className={styles.red}>{target}&apos;s</span> Report.</h1>
        <section className={styles.membershipDetails}>
          <div className={styles.left}>
            <Card elevation='Raised' className={styles.planCard}>
              <h2>Pick Your Preferred Plan</h2>
              <hr />
              <RichTileButton items={[
                {selected:true,value: 'monthly',children:
                  <div className={styles.plan}>
                    <div className={styles.term}>
                      <h3>1 Month Membership</h3>
                      <h6>Hassle Free Cancellation!</h6>
                      <h4>Get <b>150 Reports</b> Per Month!</h4>
                    </div>
                    <div className={styles.price}>
                      <h2><b>$29.95</b>/mo</h2>
                    </div>
                  </div>},
                {value:'bimonthly',children:
                  <div className={styles.plan}>
                    <div className={styles.term}>
                      <h3>2 Month Membership</h3>
                      <h6>Best Value!</h6>
                      <h4>Get <b>300 Reports</b> and more!</h4>
                    </div>
                    <div className={styles.price}>
                      <h2><b>$25.12</b>/mo</h2>
                      <h5>$50.24 Today</h5>
                    </div>
                  </div>},
              ]} onChange={(item) => setMembershipSelection(item.value)} />
            </Card>
            <Card elevation='Raised' className={styles.benefitsCard}>
              <h2>Member Benefits</h2>
              <hr />
              <ul className={styles.benefitsList}>
                <li><Image src="/img/icons/Addresses.svg" height={24} width={22} alt="Find Current Addresses" />Find Current Addresses</li>
                <li><Image src="/img/icons/Phone.svg" height={24} width={15} alt="Find Current Addresses" />Get Phone Numbers</li>
                <li><Image src="/img/icons/EmailAddresses.svg" height={24} width={18} alt="Find Current Addresses" />Find Email Addresses</li>
                <li><Image src="/img/icons/CriminalRecords.svg" height={24} width={18.67} alt="Find Current Addresses" />See Criminal Records</li>
                <li><Image src="/img/icons/SocialProfiles.svg" height={24} width={30} alt="Find Current Addresses" />View Social Profiles</li>
                <li><Image src="/img/icons/Photos.svg" height={20} width={26} alt="Find Current Addresses" />View Online Photos</li>
                <li><Image src="/img/icons/Marriage Papers.svg" height={24} width={18.67} alt="Find Current Addresses" />Get Marriage Records</li>
                <li><Image src="/img/icons/Family.svg" height={21} width={26.25} alt="Find Current Addresses" />Locate Family Members</li>
                <li><Image src="/img/icons/Job.svg" height={20} width={26} alt="Find Current Addresses" />See Employment Info</li>
              </ul>
            </Card>
          </div>
          <div className={styles.right}>
            <Card elevation='Raised' className={styles.searchedCard}>
              <div className={styles.profile}>
                <div className={styles.profileImage}>
                  <Image src="/img/icons/User.svg" height={56} width={56} alt={target} />
                </div>
                <div className={styles.profileInfo}>
                  <h1>{target}</h1>
                  <div>
                    {age && <span>Age {age}</span>}
                    {age && state && <span> • </span>}
                    {state && <span>{CONSTANTS.STATES.find((x) => x.value === state)?.label || state}</span>}
                  </div>
                </div>
              </div>
            </Card>
            <Card elevation='Raised' className={styles.bonusBenefit}>
              <div className={styles.content}>
                <h2>Bonus Benefit</h2>
                <p className={styles.byline}><Image src="/img/icons/notification.webp" width={16} height={16} alt="Notifications of changes" />Real-time notifications when reports change!</p>
              </div>
              <hr />
              <div className={styles.content}>
                <h4>How Am I Billed?</h4>
                <p>Your membership automatically renews every month unless you cancel before the start of the next term. We will charge the recurring membership fee plus applicable sales tax to the same payment option you use today. Your membership is limited to running 150 reports per month. </p>
                <h4>Hassle Free Cancellation</h4>
                <p>You can cancel your membership at any time, by calling <b>Phone Number</b> or online by simply emailing <b>email address</b>.</p>
              </div>
            </Card>
          </div>
        </section>
        <section className={styles.shadedSection}>
          <div className={styles.paymentGrid}>
            <div />
            <div className={styles.paymentForm}>
              <h1>Account Details</h1>
                <div className={styles.accountFormFields}>
                  <div className="row">
                    <div className="col6">
                      <div className={styles.accountFormField}>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" placeholder="First Name" onChange={(e) => {}} />
                      </div>
                    </div>
                    <div className="col6">
                      <div className={styles.accountFormField}>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" placeholder="Last Name" onChange={(e) => {}} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col6">
                      <div className={styles.accountFormField}>
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="text" placeholder="Preferred Email Address" onChange={(e) => {}} />
                      </div>
                    </div>
                    <div className="col6">
                      <div className={styles.accountFormField}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" onChange={(e) => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              <h1>Enter Payment Information</h1>
              <div className={styles.paymentFormFields}>
                <div className="row col12">
                  <div className={styles.paymentFormField}>
                    <label htmlFor="cardNumber">Full Name on Card</label>
                    <Field type="text" id="cardNumber" name="cardNumber" required placeholder="ex. John Smith" onChange={(e) => {}} />
                  </div>
                </div>
                <div className="row col12">
                  <div className={styles.paymentFormField}>
                    <label htmlFor="cardNumber">Card Number</label>
                    <Field type="number" id="cardNumber" name="cardNumber" required placeholder="Valid Credit or Debit Card Number" onChange={(e) => {}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col3">
                    <div className={styles.paymentFormField}>
                      <label htmlFor="expDate">Expiration Date</label>
                      <Field type="text" id="expDate" name="expDate" required placeholder="MM/YY" onChange={(e) => {}} />
                    </div>
                  </div>
                  <div className="col3">
                    <div className={styles.paymentFormField}>
                      <label htmlFor="cvv">CVV</label>
                      <Field type="number" id="cvv" name="cvv" required placeholder="ex. 123" onChange={(e) => {}} />
                    </div>
                  </div>
                  <div className="col6">
                    <div className={styles.paymentFormField}>
                      <label htmlFor="zipCode">Billing Zip Code</label>
                      <Field type="number" id="zipCode" name="zipCode" required placeholder="ex. 12345" onChange={(e) => {}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.termsContainer}>
                <p className={styles.explanation}><b>*Terms of Use and Pricing Information</b></p>
                <div className="row">
                  <Field type="checkbox" id="terms" placeholder="Accept Terms and Conditions" name="terms" />
                  <p>By clicking the button below, you agree to {BRAND}&apos;s Terms of Use, Privacy Policy and you authorize WI to charge your card $1.00 today for your reports. With your reports, you get a free Unlimited Search trial account for a full 7 Days. With Unlimited Search, you can search for as many reports as you want, and view and access up to 5 reports per day! If you cancel your trial before {TRIALENDDATE}, there will be no further charges. If you like what you see and wish to search more reports on friends, relatives or anybody else in your life, simply do nothing and we will automatically start your Unlimited Search subscription and charge your card just $39.55 at the end of the trial period and every 30 Days thereafter until you cancel. You may cancel at any time with our 100% hassle free cancellation. Just call us at <a href={`tel:${PHONE}`}><b>{PHONE}</b></a> or email us anytime, 24 hours a day, 7 days a week.</p>
                </div>
                <div className="row">
                  <input type="checkbox" id="fcra" title={`Acknowledge that ${BRAND} is not a Consumer Reporting Agency`} name="fcra" />
                  <p><b>You also understand</b> and agree that {BRAND} is not a &quot;consumer reporting agency&quot;, as defined in the Fair Credit Reporting Act (15 U.S.C. § 1681, et seq.) (&quot;FCRA&quot;) and does not provide &quot;consumer reports&quot;, as defined in FCRA. You understand and represent that you are not purchasing and will not use WI&apos;s products or services for any purpose in connection with determining a person&apos;s eligibility for credit, insurance, employment or for any other eligibility determination subject to FCRA.</p>
                </div>
              </div>
              <Button className={styles.submit} format='Filled' onClick={(e) => {}} label="View Report Now" />
            </div>
            <div className={styles.ctas}>
              <div className={styles.cancellation}>
                <h3>Hassle Free Cancellation</h3>
                <Image src="/img/icons/no-hassle-cancel.webp" width={55} height={70} alt="No Hassle Cancellation" />
                <p>Cancel online or call us at any time at <a href={`tel:${PHONE}`}>{PHONE}</a></p>
              </div>
              <div className={styles.security}>
                <div className={styles.purpleheading}>
                  100% Secure Encrypted Payments
                </div>
                <div className={styles.securityLogos}>
                  <Image src="/img/logos/lets-encrypt.webp" width={83} height={60} alt="Let's Encrypt" />
                  <Image src="/img/logos/securitymetrics.webp" width={84} height={46} alt="Credit Card Safe - Security Metrics" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Signup;