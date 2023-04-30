import { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '/styles/Home.module.css';
import rStyles from '/styles/Research.module.css';
import Header from 'molecule/Header';
import Footer from 'molecule/Footer';
import Card from 'atom/Card';
import ListItem from 'atom/ListItem';
import Image from 'next/image';
import Workflow from 'molecule/Workflow';
import Button from 'atom/Button';
import Field from 'atom/Field';

const Research = () => {
  const { query, push } = useRouter();
  let { firstName, lastName, id, state } = query;
  if (firstName === 'undefined') firstName = '';
  if (lastName === 'undefined') lastName = '';
  const target = `${firstName || ''} ${lastName || ''}`;

  const screens = useMemo(() => [
    { time:8000, progress: 10, component:<>
        <h1 className={rStyles.pageHeading}>Saving Results for <span className="red">{target}</span></h1>
        <Card className={rStyles.pageContent}>
          <h1>Most Popular Uses</h1>
          <Card elevation="Flat">
            <ul className={rStyles.popularGrid}>
              <ListItem image='/img/icons/Email.svg' text="Find Phone and Email" />
              <ListItem image='/img/icons/in-love.webp' text="Make Dating Safer" />
              <ListItem image='/img/icons/network.svg' text="Find Family or Friends" />
              <ListItem image='/img/icons/property.svg' text="Locate Addresses/Properties" />
              <ListItem image='/img/icons/id-card.webp' text="Discover Personal Records" />
              <ListItem image='/img/icons/hacker.webp' text="Avoid Scammers" />
            </ul>
          </Card>
        </Card>
    </> },
    { time:8000, progress: 20, component:<>
      <h1 className={rStyles.pageHeading}>Saving Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Social Media Scan</h1>
        <Card elevation="Flat" className={rStyles.center}>
          <h3>Our search may reveal social media profiles, online photos, videos, family, professional associates, and much more! View some potential social sources below:</h3>
          <Image src='/img/animation/social-networks.webp' className={rStyles.socialImg} width={266} alt="Social Media Platforms" height={194} />
        </Card>
      </Card>
    </> },
    { time:8000, progress: 30, component:<>
      <h1 className={rStyles.pageHeading}>Saving Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Public Records Review</h1>
        <Card elevation="Flat" className={rStyles.center}>
          <h3>Great News! We&apos;ve found search results for {target}</h3>
          <div className={`row ${rStyles.bubbleContainer}`}>
            <div className={rStyles.bubble}><Image src='/img/icons/id-card.webp' width={64} height={64} alt="Personal Records" /></div>
            <div className={rStyles.bubble}><Image src='/img/icons/property.svg' width={64} height={64} alt="Address/Property Records" /></div>
            <div className={rStyles.bubble}><Image src='/img/icons/in-love.webp' width={64} height={64} alt="Marriage/Divorce Records" /></div>
            <div className={rStyles.bubble}><Image src='/img/icons/handcuffs.svg' width={64} height={64} alt="Criminal Records" /></div>
          </div>
          <p>We provide background reports that contain personal information from millions of online sources such as criminal records, marriage/divorce records, phone numbers, email addresses, career information, property information and much more!</p>
        </Card>
      </Card>
    </> },
    { time:8000, progress: 30, component:<>
      <h1 className={rStyles.pageHeading}>Saving Results for <span className="red">{target}</span></h1>
      <div className={`row ${rStyles.contactContainer}`}>
        <div className="col9">
          <Card className={rStyles.pageContent}>
            <h1 className={rStyles.alth1}>To see your results, we need your contact information</h1>
            <div className={rStyles.contactForm}>
              <div className="row">
                <div className="col6">
                  <div className={rStyles.accountFormField}>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" placeholder="First Name" onChange={(e) => {}} />
                  </div>
                </div>
                <div className="col6">
                  <div className={rStyles.accountFormField}>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" placeholder="Last Name" onChange={(e) => {}} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col6">
                  <div className={rStyles.accountFormField}>
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="text" placeholder="Preferred Email Address" onChange={(e) => {}} />
                  </div>
                </div>
                <div className="col6">
                  <div className={rStyles.accountFormField}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" onChange={(e) => {}} />
                  </div>
                </div>
              </div>
              <p>By clicking &quot;SAVE RESULTS&quot;, I provide my consent to receive report updates, payment reminders, and alerts from <b>BRAND</b> in email and/or SMS text messages sent through an automatic telephone dialing system. I understand that consent is not a condition to purchase this service, and can call <b>(888) 270-9304</b> or <b>email us</b> to purchase. I also agree with the <b>Terms of Use</b>, and <b>Privacy Policy</b>. <b>Reply HELP for help, or STOP to cancel. Message & data rates may apply. 1 message/day.</b></p>
            </div>
            <div className={rStyles.center}>
              <Button format='Filled' label='Get Results' className={rStyles.contactBtn} />
            </div>
          </Card>
        </div>
        <div className="col3">
          <Card className={`${rStyles.pageContent} ${rStyles.chooseUs}`}>
            <h1 className={rStyles.alth1}>Why Choose Us?</h1>
            <div className="row">
              <div className="col4">
                <div className={rStyles.bubble}><Image src='/img/icons/rich/responsive.webp' width={42} height={42} alt="Millions of reports ran" /></div>
              </div>
              <div className="col8">
                <h3 className={rStyles.alth3}>Millions</h3>
                <p>of reports ran</p>
              </div>
            </div>
            <div className="row">
              <div className="col4">
                <div className={rStyles.bubble}><Image src='/img/icons/rich/people.webp' width={42} height={42} alt="Million+ people have tried BRAND" /></div>
              </div>
              <div className="col8">
                <h3 className={rStyles.alth3}>Million+ People</h3>
                <p>have tried BRAND</p>
              </div>
            </div>
            <div className="row">
              <div className="col4">
                <div className={rStyles.bubble}><Image src='/img/icons/rich/folders.webp' width={42} height={42} alt="Millions of records searched" /></div>
              </div>
              <div className="col8">
                <h3 className={rStyles.alth3}>Millions</h3>
                <p>of records searched</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </> },
    { time:8000, progress: 40, component:<>
      <h1 className={rStyles.pageHeading}>Completing Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Personal Information</h1>
        <Card elevation="Flat">
          <div className="row">
            <div className="col8">
              <ul className={rStyles.ulFill}>
                <li>Your full background check report may provide details such as age, full name, aliases, past/current addresses, email addresses, and other basic personal information.</li>
                <li>You may discover phone numbers with details such as carrier, line type, connection status, and previous line owners.</li>
                <li>Find email addresses for anyone in the USA. You may discover work, personal, or secret emails that someone has been hiding from you.</li>
              </ul>
            </div>
            <div className={`col4 ${rStyles.center}`}>
              <Image src="/img/marketing/research/Sample Report.png" className={rStyles.sampleReport} width={216} height={258} alt="Sample Report" />
            </div>
          </div>
        </Card>
      </Card>
    </> },
    { time:8000, progress: 50, component:<>
      <h1 className={rStyles.pageHeading}>Completing Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Address and Property</h1>
        <Card elevation="Flat">
          <div className="row">
            <div className="col8">
              <ul className={rStyles.ulFill}>
                <li>View past and current properties on satellite maps. Learn names of co-owners or roommates and the years that they resided at/owned the property.</li>
                <li>Reports may include details such as purchase dates, purchase prices, current values, and most recent sellers.</li>
                <li>Discover detailed information on past or present residences such as mailing addresses, real estate assets, or rental status.</li>
              </ul>
            </div>
            <div className={`col4 ${rStyles.center}`}>
              <Image src="/img/marketing/research/Sample Property.png" className={rStyles.sampleReport} width={216} height={258} alt="Sample Report" />
            </div>
          </div>
        </Card>
      </Card>
    </> },
    { time:8000, progress: 60, component:<>
      <h1 className={rStyles.pageHeading}>Completing Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Criminal Records</h1>
        <Card elevation="Flat">
          <div className="row">
            <div className="col8">
              <ul className={rStyles.ulFill}>
                <li>We search county, state, and federal databases to provide complete and detailed court and arrest records when available.</li>
                <li>Reports may contain arrest records and sex offenses, including dates, locations, and conviction statuses.</li>
                <li>Your report may also reveal any outstanding warrants as well as any traffic violations and/or speeding tickets.</li>
              </ul>
            </div>
            <div className={`col4 ${rStyles.center}`}>
              <Image src="/img/marketing/research/Sample Criminal.png" className={rStyles.sampleReport} width={216} height={258} alt="Sample Report" />
            </div>
          </div>
        </Card>
      </Card>
    </> },
    { time:8000, progress: 60, component:<>
      <h1 className={rStyles.pageHeading}>Completing Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Relatives and Associates</h1>
        <Card elevation="Flat">
          <div className="row">
            <div className="col8">
              <ul className={rStyles.ulFill}>
                <li>We scan millions of public records to find people who are close to the person you are searching for.</li>
                <li>Your report may reveal people who are close to the person you are looking for such as family members, significant others, neighbors, business associates, and more. </li>
                <li>When available, you may be able to find detailed information about these relatives/associates including age, location, phone information, and online photos.</li>
              </ul>
            </div>
            <div className={`col4 ${rStyles.center}`}>
              <Image src="/img/marketing/research/Sample Relatives.png" className={rStyles.sampleReport} width={216} height={258} alt="Sample Report" />
            </div>
          </div>
        </Card>
      </Card>
    </> },
    { time:8000, progress: 70, component:<>
      <h1 className={rStyles.pageHeading}>Completing Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Social Media</h1>
        <Card elevation="Flat">
          <div className="row">
            <div className="col8">
              <ul className={rStyles.ulFill}>
                <li>Your report may reveal social media profiles, accounts, and screen names owned by the person you are searching for.</li>
                <li>Social media accounts are an excellent way to learn a variety of personal information about your search subject.</li>
                <li>You may be able to view online photos, or discover details about their personal relationships, education, birthdates, career history and much more!</li>
              </ul>
            </div>
            <div className={`col4 ${rStyles.center}`}>
              <Image src="/img/marketing/research/Sample Social.png" className={rStyles.sampleReport} width={216} height={258} alt="Sample Report" />
            </div>
          </div>
        </Card>
      </Card>
    </> },
    { time:8000, progress: 80, component:<>
      <h1 className={rStyles.pageHeading}>Completing Results for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Additional Benefits</h1>
        <Card elevation="Flat">
          <div className="row">
            <div className="col8">
              <ul className={rStyles.ulFill}>
                <li>We now protect all members with Free Identity Protection services including Dark Web Monitoring, Identity Theft Recovery, and Lost Wallet Service.</li>
                <li>You can also search by phone number, look up Life Events such as Marriage/Divorce Records, or search for an inmate.</li>
                <li>We also provide continuous monitoring for your reports so you&apos;ll always be up to date with the people you have searched for.</li>
              </ul>
            </div>
            <div className={`col4 ${rStyles.center}`}>
              <Image src="/img/marketing/research/Sample Benefits.png" className={rStyles.sampleReport} width={216} height={258} alt="Sample Report" />
            </div>
          </div>
        </Card>
      </Card>
    </> },
    { time:8000, progress: 90, component:<>
      <h1 className={rStyles.pageHeading}>Preparing Monitoring for <span className="red">{target}</span></h1>
      <Card className={rStyles.pageContent}>
        <h1>Real Time Notifications</h1>
        <Card elevation="Flat">
          <ul className={rStyles.ulFill}>
            <ListItem className={rStyles.filledLi} text={`We continuously monitor ${target} and send you notifications whenever there are changes or updates.`} format='Bullet' image='/img/icons/rich/notification.webp' />
            <ListItem className={rStyles.filledLi} text={`Get real time email or phone notifications and never miss out on new important information about ${target}.`} format='Bullet' image='/img/icons/rich/email-notification.webp' />
            <ListItem className={rStyles.filledLi} text={`Find out if they happen to move, change phone numbers, open new social accounts, commit criminal offenses, and much more.`} format='Bullet' image='/img/icons/rich/mobile-notification.webp' />
          </ul>
        </Card>
      </Card>
    </> },
  ], [target]);

  const loadSup = () => {
    push({
      pathname: '/signup',
      query: query
    })
  }

  return (
    <>
      <Head>
        <title>Next POC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${rStyles.research}`}>
         <Workflow steps={screens} showProgress completed={loadSup} />
         <h2 className={rStyles.backWarning}>Please do not close the page or click the back button as you may lose your search progress</h2>
      </main>
      <Footer />
    </>
  )
}
export default Research;