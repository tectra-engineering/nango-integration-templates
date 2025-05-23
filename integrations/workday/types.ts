export interface ResponseGetList<T> {
    attributes: {
        'wd:version': string;
    };
    Response_Filter: {
        Page: number;
        Count: number;
    };
    Response_Results: {
        Total_Results: number;
        Total_Pages: number;
        Page_Results: number;
        Page: number;
    };
    Response_Data: T;
}
interface Value {
    attributes: {
        [key: string]: string;
        'wd:type': string;
    };
    $value: string;
}

// https://community.workday.com/sites/default/files/file-hosting/productionapi/Staffing/v44.0/Get_Workers.html
export type ResponseGet_WorkersAsync = ResponseGetList<{
    Worker: ResponseWorkdayWorker[];
}>;
export interface ResponseWorkdayWorker {
    Worker_Reference: { ID: Value[] };
    Worker_Descriptor: string;
    Worker_Data: {
        Worker_ID: string;
        User_ID: string;
        Personal_Data: {
            Name_Data: {
                Legal_Name_Data: {
                    Name_Detail_Data: {
                        attributes: unknown;
                        Country_Reference: Value;
                        First_Name: string;
                        Last_Name: string;
                    };
                };
                Preferred_Name_Data: {
                    Name_Detail_Data: {
                        attributes: unknown;
                        Country_Reference: { ID: Value[] };
                        First_Name: string;
                        Last_Name: string;
                    };
                };
            };
            Personal_Information_Data: {
                Personal_Information_For_Country_Data: {
                    Country_Reference: { ID: Value[] };
                    Country_Personal_Information_Data: {
                        Marital_Status_Reference: { ID: Value[] };
                        Ethnicity_Reference: { ID: Value[] }[];
                        Race_Ethnicity_Details_Reference: { ID: Value[] }[];
                        Hispanic_or_Latino: boolean;
                        Hispanic_or_Latino_Visual_Survey: boolean;
                        Gender_Reference: { ID: Value[] };
                    }[];
                }[];
                Birth_Date: string;
                Citizenship_Status_Reference: { ID: Value[] }[];
            }[];
            Identification_Data: {
                National_ID: {
                    National_ID_Reference: { ID: Value[] };
                    National_ID_Data: unknown;
                    National_ID_Shared_Reference: unknown;
                }[];
                Passport_ID: unknown;
                License_ID: unknown;
                Custom_ID: unknown;
            };
            Contact_Data: {
                Address_Data?: WorkdayAddressData[];
                Phone_Data?: {
                    attributes: unknown;
                    Country_ISO_Code: string;
                    International_Phone_Code: string;
                    Phone_Number: string;
                    Phone_Device_Type_Reference: unknown;
                    Usage_Data: unknown;
                    Phone_Reference: unknown;
                    ID: string;
                }[];
                Email_Address_Data?: {
                    Email_Address: string;
                    Usage_Data: unknown;
                    Email_Reference: unknown;
                    ID: string;
                }[];
                Instant_Messenger_Data: unknown;
            };
            Tobacco_Use: boolean;
        };
        Employment_Data: {
            Worker_Job_Data?: {
                attributes: unknown;
                Position_Data: {
                    attributes: unknown;
                    Position_Reference: unknown;
                    Position_ID: string;
                    Position_Title: string;
                    Business_Title: string;
                    Start_Date: string;
                    Worker_Type_Reference: unknown;
                    Position_Time_Type_Reference: unknown;
                    Job_Exempt: boolean;
                    Scheduled_Weekly_Hours: number;
                    Default_Weekly_Hours: number;
                    Working_Time_Value: number;
                    Full_Time_Equivalent_Percentage: number;
                    Specify_Paid_FTE: boolean;
                    Paid_FTE: number;
                    Specify_Working_FTE: boolean;
                    Working_FTE: number;
                    Exclude_from_Headcount: boolean;
                    Pay_Rate_Type_Reference: unknown;
                    Job_Classification_Summary_Data: unknown;
                    Federal_Withholding_FEIN: string;
                    Job_Profile_Summary_Data: {
                        Job_Profile_Reference: { ID: Value[] };
                        Job_Exempt: boolean;
                        Management_Level_Reference: { ID: Value[] };
                        Job_Family_Reference?: { ID: Value[] }[];
                        Job_Profile_Name: string;
                        Work_Shift_Required: boolean;
                        Critical_Job: boolean;
                    };
                    Business_Site_Summary_Data: {
                        Location_Reference: { ID: Value[] };
                        Name: string;
                        Location_Type_Reference: { ID: Value[] }[];
                        Local_Reference: { ID: Value[] };
                        Time_Profile_Reference: { ID: Value[] };
                        Scheduled_Weekly_Hours: number;
                        Address_Data: WorkdayAddressData[];
                    };
                    Payroll_Interface_Processing_Data: unknown;
                    Work_Space__Reference: unknown;
                    Manager_as_of_last_detected_manager_change_Reference: unknown;
                };
            }[];
            Worker_Status_Data?: {
                Active?: boolean;
                Active_Status_Date?: string;
                Hire_Date?: string;
                Original_Hire_Date?: string;
                Hire_Reason_Reference?: {
                    ID: Value[];
                };
                End_Employment_Date?: string;
                Continuous_Service_Date?: string;
                First_Day_of_Work?: string;
                Expected_Retirement_Date?: string;
                Retirement_Eligibility_Date?: string;
                Retired?: boolean;
                Retirement_Date?: string;
                Seniority_Date?: string;
                Severance_Date?: string;
                Benefits_Service_Date?: string;
                Company_Service_Date?: string;
                Time_Off_Service_Date?: string;
                Vesting_Date?: string;
                Date_Entered_Workforce?: string;
                Days_Unemployed?: number;
                Months_Continuous_Prior_Employment?: number;
                Terminated?: boolean;
                Termination_Date?: string;
                Pay_Through_Date?: string;
                Agreement_Signature_Date?: string;
                Dismissal_Process_Start_Date?: string;
                Notice_Period_Start_Date?: string;
                Primary_Termination_Reason_Reference?: {
                    ID: Value[];
                };
                Primary_Termination_Category_Reference?: {
                    ID: Value[];
                };
                Termination_Involuntary?: boolean;
                Secondary_Termination_Reasons_Data?: Secondary_Termination_Data;
                Local_Termination_Reason_Reference?: {
                    ID: Value[];
                };
                Eligible_for_Hire_Reference?: {
                    ID: Value[];
                };
                Regrettable_Termination?: boolean;
                Eligible_for_Rehire_on_Latest_Termination_Reference?: {
                    ID: Value[];
                };
                Hire_Rescinded?: boolean;
                Termination_Last_Day_of_Work?: string;
                Resignation_Date?: string;
                Last_Date_for_Which_Paid?: string;
                Expected_Date_of_Return?: string;
                Not_Returning?: boolean;
                Return_Unknown?: boolean;
                Probation_Start_Date?: string;
                Probation_End_Date?: string;
                Leave_Status_Data?: Leave_Status_Detail_Data;
                Leave_Requests_Corrected_Data?: Leave_Requests_Corrected_Detail_Data;
                Academic_Tenure_Date?: string;
                Rehire?: boolean;
            };
            International_Assignment_Summary_Data: unknown;
        };
        Compensation_Data: unknown;
    };
}

interface Secondary_Termination_Data {
    Secondary_Termination_Reason_Reference: { ID: Value[] };
    Secondary_Termination_Reason_Category_Reference: { ID: Value[] };
}

interface Leave_Status_Detail_Data {
    Leave_Request_Event_Reference?: {
        ID: Value[];
    };
    Leave_Request_Description?: string;
    Leave_Return_Event_Reference?: {
        ID: Value[];
    };
    On_Leave?: boolean;
    Leave_Start_Date?: string;
    Estimated_Leave_End_Date?: string;
    Leave_End_Date?: string;
    First_Day_Of_Work?: string;
    Leave_Last_Day_of_Work?: string;
    Leave_of_Absence_Type_Reference?: {
        ID: Value[];
    };
    Benefits_Effect?: boolean;
    Payroll_Effect?: boolean;
    Paid_Time_Off_Accrual_Effect?: boolean;
    Continuous_Service_Accrual_Effect?: boolean;
    Stock_Vesting_Effect?: boolean;
    Leave_Type_Reason_Reference?: {
        ID: Value[];
    };
    Leave_Request_Additional_Fields?: Leave_Request_Additional_Fields;
}

interface Leave_Request_Additional_Fields {
    Last_Date_for_Which_Paid?: string;
    Expected_Due_Date?: string;
    Child_s_Birth_Date?: string;
    Stillbirth_Baby_Deceased?: boolean;
    Date_Baby_Arrived_Home_From_Hospital?: string;
    Adoption_Placement_Date?: string;
    Adoption_Notification_Date?: string;
    Date_Child_Entered_Country?: string;
    Multiple_Child_Indicator?: boolean;
    Number_of_Babies_Adopted_Children?: number;
    Number_of_Previous_Births?: number;
    Number_of_Previous_Maternity_Leaves?: number;
    Number_of_Child_Dependents?: number;
    Single_Parent_Indicator?: boolean;
    Age_of_Dependent?: number;
    Work_Related?: boolean;
    Stop_Payment_Date?: string;
    Social_Security_Disability_Code?: string; // string(8)
    Location_During_Leave?: string;
    Caesarean_Section_Birth?: boolean;
    Leave_Percentage?: number; // decimal(5,2)
    Week_of_Confinement?: string;
    Leave_Entitlement_Override?: number; // decimal(5,0)
    Date_of_Recall?: string;
    Child_s_Date_of_Death?: string;
    Child_Disability_Indicator?: boolean;
    Neonatal_Care_Start_Date?: string;
    Neonatal_Care_Discharge_Date?: string;
}

interface Leave_Requests_Corrected_Detail_Data {
    Leave_Request_Event_Reference?: {
        ID: Value[];
    };
    Leave_Request_Description?: string;
    Leave_Return_Event_Reference?: {
        ID: Value[];
    };
    On_Leave?: boolean;
    Leave_Start_Date?: string;
    Estimated_Leave_End_Date?: string;
    Leave_End_Date?: string;
    First_Day_of_Work?: string;
    Leave_Last_Day_of_Work?: string;
    Leave_of_Absence_Type_Reference?: {
        ID: Value[];
    };
    Links_Back_to_Prior_Event_Reference?: {
        ID: Value[];
    };
    Benefits_Effect?: boolean;
    Payroll_Effect?: boolean;
    Paid_Time_Off_Accrual_Effect?: boolean;
    Continuous_Service_Accrual_Effect?: boolean;
    Stock_Vesting_Effect?: boolean;
    Leave_Type_Reason_Reference?: {
        ID: Value[];
    };
    Leave_Request_Additional_Fields?: Leave_Request_Additional_Fields;
}

interface WorkdayAddressData {
    attributes: unknown;
    Country_Reference: { ID: Value[] };
    Last_Modified: string;
    Address_Line_Data: Value[];
    Municipality: string;
    Country_Region_Reference: { ID: Value[] };
    Country_Region_Descriptor: string;
    Postal_Code: string;
    Usage_Data: unknown;
    Number_of_Days: number;
    Address_Reference: unknown;
    Address_ID: string;
}

// https://community.workday.com/sites/default/files/file-hosting/productionapi/Human_Resources/v42.0/Get_Locations.html#Response_FilterType
export type ResponseGet_LocationsAsync = ResponseGetList<{
    Location: ResponseWorkdayLocation[];
}>;
export interface ResponseWorkdayLocation {
    Location_Reference: {
        ID: Value[];
    };
    Location_Data: {
        Location_ID: string;
        Location_Name: string;
        Location_Usage_Reference: {
            ID: Value[];
        }[];
        Location_Type_Reference: {
            ID: Value[];
        }[];
        Inactive: boolean;
        Latitude: number;
        Longitude: number;
        Altitude: number;
        Time_Profile_Reference?: {
            ID: Value[];
        };
        Locale_Reference?: {
            ID: Value[];
        };
        Time_Zone_Reference?: {
            ID: Value[];
        };
        Default_Currency_Reference?: {
            ID: Value[];
        };
        Contact_Data?: {
            Address_Data?: {
                attributes: {
                    'wd:Effective_Date': string;
                    'wd:Address_Format_Type': string;
                    'wd:Formatted_Address': string;
                    'wd:Defaulted_Business_Site_Address': string;
                };
                Country_Reference: {
                    ID: Value[];
                };
                Last_Modified: string;
                Address_Line_Data: {
                    attributes: {
                        'wd:Type': string;
                        'wd:Descriptor': string;
                    };
                    $value: string;
                }[];
                Municipality?: string;
                Country_Region_Reference?: {
                    ID: Value[];
                };
                Country_Region_Descriptor?: string;
                Postal_Code?: string;
                Usage_Data: {
                    attributes: {
                        'wd:Public': string;
                    };
                    Type_Data: {
                        attributes: {
                            'wd:Primary': string;
                        };
                        Type_Reference: {
                            ID: Value[];
                        };
                    }[];
                    Use_For_Reference?: {
                        ID: Value[];
                    }[];
                    Use_For_Tenanted_Reference?: {
                        ID: Value[];
                    }[];
                }[];
                Number_of_Days: number;
                Address_Reference: {
                    ID: Value[];
                };
                Address_ID: string;
                Submunicipality_Data?: {
                    attributes: {
                        'wd:Type': string;
                        'wd:Address_Component_Name': string;
                    };
                    $value: string;
                }[];
                Municipality_Local?: string;
            }[];
            Phone_Data?: {
                attributes: {
                    'wd:Area_Code'?: string;
                    'wd:Phone_Number_Without_Area_Code': string;
                    'wd:E164_Formatted_Phone': string;
                    'wd:Workday_Traditional_Formatted_Phone': string;
                    'wd:National_Formatted_Phone': string;
                    'wd:International_Formatted_Phone': string;
                    'wd:Tenant_Formatted_Phone': string;
                };
                Country_ISO_Code: string;
                International_Phone_Code: string;
                Phone_Number: string;
                Phone_Device_Type_Reference: {
                    ID: Value[];
                };
                Usage_Data: {
                    attributes: {
                        'wd:Public': string;
                    };
                    Type_Data: {
                        attributes: {
                            'wd:Primary': string;
                        };
                        Type_Reference: {
                            ID: Value[];
                        };
                    }[];
                    Use_For_Reference?: {
                        ID: Value[];
                    }[];
                    Use_For_Tenanted_Reference?: {
                        ID: Value[];
                    }[];
                }[];
                Phone_Reference: {
                    ID: Value[];
                };
                ID: string;
            }[];
            Email_Address_Data: {
                Email_Address: string;
                Usage_Data: {
                    attributes: {
                        'wd:Public': string;
                    };
                    Type_Data: {
                        attributes: {
                            'wd:Primary': string;
                        };
                        Type_Reference: {
                            ID: Value[];
                        };
                    }[];
                    Use_For_Reference?: {
                        ID: Value[];
                    }[];
                    Use_For_Tenanted_Reference?: {
                        ID: Value[];
                    }[];
                }[];
                Email_Reference: {
                    ID: Value[];
                };
                ID: string;
            }[];
        };
        Integration_ID_Data: {
            ID: {
                attributes: {
                    'wd:System_ID': string;
                };
                $value: string;
            }[];
        };
        Location_Hierarchy_Reference: {
            ID: Value[];
        }[];
        Display_Language_Reference?: {
            ID: Value[];
        };
        Trade_Name?: string;
        Worksite_ID_Code?: string;
        Local_Minimum_Wage_Authority_Reference?: {
            ID: Value[];
        };
        Superior_Location_Reference?: {
            ID: Value[];
        };
    };
}

// https://community.workday.com/sites/default/files/file-hosting/productionapi/Human_Resources/v42.2/Get_Job_Families.html
export type ResponseGet_Job_FamiliesAsync = ResponseGetList<{
    Job_Family: ResponseWorkdayJobFamily[];
}>;
export interface ResponseWorkdayJobFamily {
    Job_Family_Reference: {
        ID: Value[];
    };
    Job_Family_Data: {
        ID: string;
        Effective_Date: string;
        Name: string;
        Summary?: string;
        Inactive: boolean;
        Job_Profile_Data?: {
            Job_Profile_Reference: {
                ID: Value[];
            };
        }[];
    };
}

export interface WorkdayEmployee {
    workerID?: string;
    personalInformation?: {
        nameData?: {
            First_Name?: string;
            Last_Name?: string;
        };
    };
    email?: string;
    jobTitle?: string;
    organizationReferenceID?: string;
    organization?: string;
    jobProfile?: string;
    employmentData?: {
        Terminated?: boolean;
        Leave_Status_Data?: {
            On_Leave?: boolean;
        };
        Suspended?: boolean;
        Active?: boolean;
    };
    originalHireDate?: string;
    terminationDate?: string;
    managerID?: string;
    managerFirstName?: string;
    managerLastName?: string;
    managerEmail?: string;
    location?: {
        name?: string;
        address?: string;
        city?: string;
        state?: {
            name?: string;
        };
        country?: {
            name?: string;
        };
        zip_code?: string;
    };
    phone_number?: string;
}
