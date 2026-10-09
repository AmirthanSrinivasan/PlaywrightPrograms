const { test, expect,errors,chromium } = require('@playwright/test')
const POManagerNextgen = require('../../../../../Helper/POManageNextgen')
const POManagerRls = require('../../../../../Helper/POManagerRLS.js')
const Logindata = require('../../../../../TestData/LoginURLS.json')
const data = require('../../../../../TestData/NextgenData.json')
const timeout = require('../../../../../TestData/Timeout.json');
const RLSdata = require('../../../../../TestData/RLS_Data_Repo.json');
const time = require('../../../../../TestData/Timeout.json')
const { error } = require('console')
import * as allure from "allure-js-commons";
const { faker } = require('@faker-js/faker');

test('Mandatory for a Servicing Guarantor to have a signed statement of position', {tag: '@GoldenGate'}, async ({browser}, testinfo) => {
        const context = await browser.newContext();
    const page = await browser.newPage();
    let applicationNum;
    let testCase =`
    Test Case: Golden Gate 25.7 ANZ-4921 test_cases`
    test.info().annotations.push({
        type: 'test scenario',
        description: testCase,
      })
    await allure.description(testCase)
    await allure.owner("Amirthan Manoharan")
    await allure.severity("critical")
    await allure.parentSuite("Golden Gate");
    await allure.suite("Batch 1 ");
    await allure.subSuite("25.7 Technical");
    test.setTimeout(2400000);
    //#region : Capturing the console and exception error messages and printing over console
    const errors= []
    const logs = []
    page.on("pageerror", (exception) =>{
        errors.push(exception)
    })
    page.on("console", (messages) => {
        logs.push(messages)
    })
    //#endregion
        const Pomanagernextgen = new POManagerNextgen(page)
        const Pomanagerrls = new POManagerRls(page)
        const loginPage = Pomanagernextgen.getLoginPage()
        const rls = Pomanagernextgen.getrlsPage()
        const appPage = Pomanagernextgen.getApplicationPage()
        const applicantpage = Pomanagernextgen.getApplicantsPage()
        const LoansPage = Pomanagernextgen.getLoansPage()
        const secPage = Pomanagernextgen.getSecurityPage()
        const Finapage = Pomanagernextgen.getFinanicalPage()
        const comppage = Pomanagernextgen.getcompliancePage()
        const otherproductpage = Pomanagernextgen.getotherprodcutspage();
        const suppdocpage = Pomanagernextgen.getsupportingdocsPage()
        const submit = Pomanagernextgen.getSubmitPage()
        const menuPage = Pomanagernextgen.getMenuPage()
        const comPage = Pomanagerrls.getCommonPageLinks()
        const applType = Pomanagerrls.getEnterOriginationDetails()
        const confCust = Pomanagerrls.getConfirmCustomers()
        const additionalCustomerDetails = Pomanagerrls.getAdditionalCustomerDetailsPage();
        const enterCustomerDetails = Pomanagerrls.getEnterCustomerDetailsPage();
        const confirmDeclarationIdentityDetails = Pomanagerrls.getConfirmDeclarationIdentityDetailsPage();
        const loanPurpose = Pomanagerrls.getConfirmLoanPurpose();
        const pageLinks = Pomanagerrls.getCommonPageLinks();
        const exisistingApp = Pomanagerrls.getReviewExistingApplications();
        const entity = Pomanagerrls.getEnterBusinessEntityDetailsPage();
        const income = Pomanagerrls.getEnterProfitAndLossDetailsPage();
        const confirmEmp = Pomanagerrls.getConfirmEmploymentDetailsPage();
        const custEmpDetl = Pomanagerrls.getEnterCurrentEmploymentDetails();
        const details = Pomanagerrls.getcustomerDetailsGeneratorPage();
        const details1 = Pomanagerrls.getcustomerDetailsGeneratorPage();
        const gurantorFN= details1.generateFirstName();
        const gurantorLN= details1.generateLastName();
        const FN = details.generateFirstName();
        const MN = details.generateRandomString(5)
        const LN = details.generateLastName()

        await test.step("Launching URL", async step => {
                await page.goto(Logindata.LoginDetails.Nextgen.url[0])
        })

        await test.step("Performing Loging functionality", async step => {
                await loginPage.Login(Logindata.LoginDetails.Nextgen.username[2], Logindata.LoginDetails.Nextgen.password[2])
                await testinfo.attach("Nextgen login page", { body: await page.screenshot(), contentType: "image/png" })
                await menuPage.NavTobrokerApplication1();
        })
        await test.step("Application page", async step => {
                await appPage.ApprovedoriginatorDetails(data.ApplicationPage.AO1[0])
                await appPage.subApprovedoriginatorDetails(data.ApplicationPage.SAO1[0])
                await appPage.enterEmail(data.ApplicationPage.Email[0]);
                await appPage.enterOtherDetails(data.ApplicationPage.Branchtosigndocuments[0], data.ApplicationPage.Comments[0]);
                await appPage.enterAddress(data.ApplicationPage.Unitnumber[0], data.ApplicationPage.Level[0], data.ApplicationPage.Buildingname[0], data.ApplicationPage.Streetnumber[0], data.ApplicationPage.Streetname[0], data.ApplicationPage.Streettype[0], data.ApplicationPage.Post[0], data.ApplicationPage.Suburb[0], data.ApplicationPage.State[0], data.ApplicationPage.Country[0]);
                await appPage.selectDeliveryMethod(data.ApplicationPage.ReceiveLoanOfferDocumentationMethod[0])
                await testinfo.attach("Application page", { body: await page.screenshot(), contentType: "image/png" })
        })
        await test.step("Applicant page", async step => {
                await applicantpage.NavToApplicantsPage();
                await applicantpage.EnterApplicantDetails(data.ApplicantsPage.Title[6], "Neha", "Kapoor",
                details.generateDateOfBirth(), data.ApplicantsPage.Maritalstatus[2], data.ApplicantsPage.Gender[1], data.ApplicantsPage.Residencystatus[2], data.ApplicantsPage.Citizenship[0], data.ApplicantsPage.Countryofresidence[0], data.ApplicantsPage.Homephonenumberareacode[0], data.ApplicantsPage.Homephonenumber[0])
                await applicantpage.middleName("Vama");
                await applicantpage.clickForeigntaxresident_No();
                await applicantpage.enterSpousedetails(data.ApplicantsPage.Spouse[0], data.ApplicantsPage.Title[3], data.ApplicantsPage.spouseFirstName[4], data.ApplicantsPage.spouseLastName[3])
                await applicantpage.entermiscellaneous_details();
        })
        await test.step("Adding Address details", async step => {
                await applicantpage.enterAddress(data.ApplicantsPage.ResidentialAddress[1], data.ApplicantsPage.CurrentAddressSince[0], data.ApplicantsPage.Currenthousingsituation[5], data.ApplicantsPage.Postsettlementhousingsituation[2]);
                await applicantpage.enter_previousaddressdetails(data.ApplicantsPage.Previousaddress[0], data.ApplicantsPage.From[0], data.ApplicantsPage.To[2], data.ApplicantsPage.Priorhousingsituation[2]);
        })
        await test.step("Adding Employment details", async step => {
                await applicantpage.EnterEmploymentDetailsFinancialsCompanyAsOS(data.ApplicantsPage.Employmentstatus[0], data.ApplicantsPage.Employmenttype[1], data.ApplicantsPage.Employmentbasis[0],
                data.ApplicantsPage.Startdate[0], data.ApplicantsPage.Occupation[3], data.ApplicantsPage.Operatingstructure[0], data.ApplicantsPage.Incomedocumentationtype[0]);
        })
        await test.step("Adding Ownership details", async step => {
                await applicantpage.Verify_OwnershipField();
                await applicantpage.enterOwnershipPercentage("40");
                await applicantpage.OtherABN(data.ApplicantsPage.ABN[5], data.ApplicantsPage.Address[1], data.ApplicantsPage.Countrycode[0], data.ApplicantsPage.Phoneareacode[0], data.ApplicantsPage.Phone[3]);
                await applicantpage.UseUndistributedProfitsForServicingFieldVerification('YES')
        })
        await test.step("Business Financials", async step => {
                for (let i = 0; i <= 5; i++) {
                await applicantpage.EnterAddbacks(data.ApplicantsPage.Addback[i], data.ApplicantsPage.Details[i], data.ApplicantsPage.IncomeValue[i])
                }
                await applicantpage.verifyApplicantIncomefieldsForcompany();
                await applicantpage.verifyGrosssalaryRemovedNetSalaryUpdatedWithNetIncome();
                await applicantpage.netAndgrossIncomeModify("550000", "450000");
                await testinfo.attach("Applicant page", { body: await page.screenshot(), contentType: "image/png" })
        })
        await test.step("Retirement Details", async step => {
                await page.waitForTimeout(4000);
                await applicantpage.EnterRetirementDetails(data.ApplicantsPage.Atwhatageistheapplicantplanningtoretire[0]);
        })
        await test.step("Identity Details", async step => {
                await applicantpage.EnterIdentityDetails(data.ApplicantsPage.Documenttype[0], "NSW", "DL423251", data.ApplicantsPage.Dateofissue[0], data.ApplicantsPage.Exiprydate[0]);
                await applicantpage.enterdeclarationsYes();
                await testinfo.attach("Applicant page", { body: await page.screenshot(), contentType: "image/png" })
        })

        await test.step("Adding Guarantor", async step => {
                await applicantpage.enteradditionalApplicant();
                await applicantpage.enterApplicantType(data.ApplicantsPage.Applicanttype[0]);
                await applicantpage.enterApplicantRole(data.ApplicantsPage.Applicantrole[2]);
                await applicantpage.enterRelationshipwithApplicant(data.ApplicantsPage.Relation[0]);//Select the relationship to be spouse
                await applicantpage.guaranteeType(data.ApplicantsPage.GuaranteeType[1]); //Gurantee Type Field
                await applicantpage.EnterApplicantDetails(data.ApplicantsPage.Title[0], "Riya", "Sharma",
                details1.generateDateOfBirth(), data.ApplicantsPage.Maritalstatus[2], data.ApplicantsPage.Gender[1], data.ApplicantsPage.Residencystatus[2], data.ApplicantsPage.Citizenship[0], data.ApplicantsPage.Countryofresidence[0], data.ApplicantsPage.Homephonenumberareacode[0], data.ApplicantsPage.Homephonenumber[0])
                await applicantpage.middleName("Yana");
                await applicantpage.clickForeigntaxresident_No();
                await applicantpage.entermiscellaneous_details();
                await applicantpage.spousetype("Neha Kapoor");
        })
        await test.step("Adding Guarantor Address", async step => {
                await applicantpage.enterAddress(data.ApplicantsPage.ResidentialAddress[1], data.ApplicantsPage.CurrentAddressSince[0], data.ApplicantsPage.Currenthousingsituation[5], data.ApplicantsPage.Postsettlementhousingsituation[2]);
        })
                await test.step("Adding Guarantor Emplyment details", async step => {
                await applicantpage.EnterEmploymentDetailsFinancialsCompanyAsOS(data.ApplicantsPage.Employmentstatus[0], data.ApplicantsPage.Employmenttype[1], data.ApplicantsPage.Employmentbasis[0],
                data.ApplicantsPage.Startdate[0], data.ApplicantsPage.Occupation[3], data.ApplicantsPage.Operatingstructure[0], data.ApplicantsPage.Incomedocumentationtype[0]);
        })
        await test.step("Adding Guarantor Ownership", async step => {
                await applicantpage.Verify_OwnershipField()
                await applicantpage.enterOwnershipPercentage("40");
                await applicantpage.OtherABN(data.ApplicantsPage.ABN[5], data.ApplicantsPage.Address[1], "", data.ApplicantsPage.Phoneareacode[0], data.ApplicantsPage.Phone[3]);
                await applicantpage.UseUndistributedProfitsForServicingFieldVerification('YES')
        })
        await test.step("Business Financials", async step => {
                for (let i = 0; i <= 5; i++) {
                await applicantpage.EnterAddbacks(data.ApplicantsPage.Addback[i], data.ApplicantsPage.Details[i], data.ApplicantsPage.IncomeValue[i])
                }
                await applicantpage.verifyApplicantIncomefieldsForcompany();
                await applicantpage.verifyGrosssalaryRemovedNetSalaryUpdatedWithNetIncome();
                await applicantpage.netAndgrossIncomeModify("550000", "450000");
                await testinfo.attach("Applicant page", { body: await page.screenshot(), contentType: "image/png" })
        })

                await test.step("Identification Details", async step => {
                await applicantpage.EnterIdentityDetails(data.ApplicantsPage.Documenttype[0], "ACT", "DL645321", data.ApplicantsPage.Dateofissue[1], data.ApplicantsPage.Exiprydate[0]);
                await applicantpage.enterdeclarationsYes();
                await testinfo.attach("Applicant page", { body: await page.screenshot(), contentType: "image/png" })
                })
                await test.step("Retirement Details", async step => {
                await applicantpage.EnterRetirementDetails(data.ApplicantsPage.Atwhatageistheapplicantplanningtoretire[1]);
                await applicantpage.enterSaturationRetirement();
                })

                await test.step("Applicant Spouse as guarantor", async step => {
                        await applicantpage.NavToApplicantsPage();
                        await applicantpage.spousetype("Riya Sharma");
        })
                await test.step("Loan Details", async step => {
                await LoansPage.NavToLoanDetailsPage()
                await LoansPage.editLoanSplit()
                await LoansPage.LoanSplitDetails(data.LoansPage.Primarypurpose[0], "125 - Purchase of newly erected dwellings", data.LoansPage.Estimatedsettlementdate[0], data.LoansPage.Baseamount[8], data.LoansPage.LMIPremiumifapplicable[3],
                data.LoansPage.LMIpaymentmethod[0], data.LoansPage.Product[0], data.LoansPage.Totalloanterm[0], data.LoansPage.Repaymentfrequency[2], data.LoansPage.EstimateRepaymentforthisFacility[1]);
                await LoansPage.editFee("100");
                await LoansPage.AddDepositAndContribution(data.LoansPage.DepositorcontributionType[3], data.LoansPage.DepositorcontributionAmount[1]);
        })
        await test.step("Security Details Page", async step => {
                await secPage.NavTosecurityPage();
                await secPage.enterSecurityInformation(data.SecurityPage.Typeofsecurity[0], data.SecurityPage.Transactiontype[0]);
                await secPage.EnterPropertyDetails(data.SecurityPage.Status[0], data.SecurityPage.Holding[2], data.SecurityPage.Zoning[0]);
                await secPage.enterPropertyType(data.SecurityPage.PropertyType[0]);
                await secPage.EnterPropertyLocationDetails(data.SecurityPage.Address[0], data.SecurityPage.Titletype[2]);
                await secPage.EnterPropertyValueDetails(data.SecurityPage.Estimatedvalue[0], data.SecurityPage.Contractvalue[0], data.SecurityPage.Basisofestimate[0], data.SecurityPage.Transfertoland[0]);
                await secPage.EnterPropertyValuationDetails(data.SecurityPage.Contactforaccess[2], data.SecurityPage.companyname[0], data.SecurityPage.contactTitle[0], data.SecurityPage.ContactFirstname[0],
                data.SecurityPage.contactSurname[1], data.SecurityPage.contactMobileNo[0], data.SecurityPage.contactareacode[0], data.SecurityPage.contactphoneNum[0]);
        })
        await test.step("Financials Page", async step => {
                await Finapage.NavToFinancialsPage();
                await Finapage.ValidateGuarantorSOPErrorMessage(data.FinancialsPage.Statementofpositiondate[0]);
                await Finapage.NoOtherAsset();
                await Finapage.ClickNoLiabiltyYes();
                for (let i = 0; i <= 12; i++) {
                await Finapage.addExpenses_Updated(data.FinancialsPage.Expensesname[i], data.FinancialsPage.ExpenseAmount[i],"Neha","Riya")
                }
                await testinfo.attach("Finanicals page", { body: await page.screenshot(), contentType: "image/png" })
                })
                await test.step("Compliance Page", async step => {
                await comppage.NavToCompliancePage();
                await comppage.AntipicatedChnages_No();
                await comppage.AntipicatedChnages_No_Gurrantor()
                await testinfo.attach("Complaince page", { body: await page.screenshot(), contentType: "image/png" })
                await comppage.Report("07/12/2023");
                await comppage.requirements();
                await comppage.DebtConsolidationQues_Yes();
                await comppage.complianceReportSelectOption(data.CompliancePage.complianceReportSelectOption[0]);
                await comppage.textarearefinance(data.CompliancePage.textarearefinance[0]);
                await comppage.refinanceanddebtbrokerdeclarationques();
                await comppage.refinanceanddebbtexistingcardsques();
                await comppage.refinanceanddebtpayinggmoreintersetques();
                await comppage.complianceReportSelectOption(data.CompliancePage.complianceReportSelectOption[1]);
                await comppage.complianceReportSelectOption(data.CompliancePage.complianceReportSelectOption[2]);
                await comppage.brokerdeclarationsfixedrate()
                await comppage.selectAnyConflicts_No();
                await comppage.textareareLoanFeaturesother(data.CompliancePage.textareaLoanFeaturesOtherRequirementsandObjectives[0])
                await comppage.textareareLoanFeatureProductSelection(data.CompliancePage.textareaLoanFeaturesProductSelection[0]);
                await comppage.selectAnyPreferedLender_No();
                await comppage.otherRequirements_No();
                await testinfo.attach("Complaince page", { body: await page.screenshot(), contentType: "image/png" })
        })
        //Gaurantor Declaration
        await test.step("Business Financials", async step => {
                await comppage.SelectGuarantorAssesmentchecklist("Guarantor Assessment Checklist - Mr".concat(" "+"Riya").concat(" "+"Sharma"));
                await comppage.InterviewdtaeGurantor(data.CompliancePage.InterviewDate[0]);
                await testinfo.attach("complaince page", { body: await page.screenshot(), contentType: "image/png" })
                //1: INTERVIEW
                await comppage.facetoface_Ques()
                await comppage.IterviewConducted_InPerson_Ques()
                await comppage.InPerson_OtherthanYourself_Ques()
                await comppage.GuarantorStrongRecommened_Ques()
                await comppage.InPerson_GuarantorReadtheFollowingsenetence_Ques_Yes()
                //2: GUARANTOR'S OPINION
                await comppage.Under_Pressure_Ques_No()
                //3: GUARANTOR'S ELIGIBILITY
                await comppage.not_exercising_their_own_free_Ques_No()
                await comppage.being_subject_to_any_misrepresentation_Ques_No()
                await comppage.subject_to_any_unreasonable_or_unfair_Ques_No()
                await comppage.is_obviously_incapable_of_engaging_Ques_No()
                await comppage.Is_the_Guarantor_a_minor_Ques_No()
                await comppage.Is_the_Guarantee_to_be_executed_under_power_of_attorney()
                //4: TYPE OF GUARANTEE
                await comppage.Type_Of_Guarantee_Servicing()
                //5: SERVICING GUARANTEE
                await comppage.Guarantor_is_in_spousal_defacto_Relationship_Que_Yes()
                await comppage.Borrower_is_relying_on_payments_Que_Yes()
                await comppage.term_of_the_proposed_loan()
                await comppage.are_willing_to_change_This_Ques_Yes()
                //await comppage.benefit_to_you_or_your_family()
                //6: GUARANTOR UNDERSTANDING AND WHAT THEY SHOULD KNOW
                await comppage.what_your_obligations_Que_Yes()
                await comppage.copy_of_BankingCode_Que_Yes()
                await comppage.Final_ass_of_borrower()
                await comppage.receive_their_Guarantee_documents()
                await comppage.funds_are_drawn()
                await comppage.Know_Your_Customer_KYC_procedure()
                //7: GUARANTOR DOCUMENT DELIVERY METHOD
                await comppage.loan_is_approved_what_is_your_preferred_method_Ques_Branch()
                //8: COMPLETE ONLY IF INDEPENDENT ADVICE IS REQUIRED
                await comppage.independent_advice_Legal()
                //9: (COMPLETE ONCE THE GUARANTOR HAS LEFT)
                await comppage.Complete_a_Statement_of_Financial_Position()
                await comppage.Verify_Guarantor_income_as_per_ANZ_policy()
                await comppage.signed_Declaration()
                await testinfo.attach("Compliance page", { body: await page.screenshot(), contentType: "image/png" })
        })
        await test.step("Other Products", async step => {
                await otherproductpage.clickMoreTab();
                await otherproductpage.clickDocuments();
                await testinfo.attach("other Products page", { body: await page.screenshot(), contentType: "image/png" })
        })
        await test.step("Supporting Docs", async step => {
                await suppdocpage.navToSupportingDocsPage()
                await suppdocpage.mandatoryDoc_HomeLoanApplicationForm777()
                await testinfo.attach("Supporting docs page", { body: await page.screenshot(), contentType: "image/png" })
        })

        await test.step("Submission Page", async step => {
                await submit.SubmitApplication()
                await submit.waitTillSubmisionConfirmation()
                await submit.closeIcon()
                await submit.clickActivity()
                await testinfo.attach("Submit page", { body: await page.screenshot(), contentType: "image/png" })
                const applicationNum = await submit.getrlsNumber()
                console.log(applicationNum)
                await testinfo.attach("Lender ID ", { body: await page.screenshot(), contentType: "image/png" })
        })
    })