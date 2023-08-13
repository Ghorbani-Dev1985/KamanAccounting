// PeopleIcon
let PeopleIcon = document.getElementById("PeopleIcon");
let PeopleMenu = document.getElementById("PeopleMenu");
const ShowPeopleMenu = (flag) => {
  if (flag) {
    PeopleIcon.classList.toggle("rotate-180");
    PeopleMenu.classList.toggle("hidden");
  }
};
// FactorIcon
let FactorIcon = document.getElementById("FactorIcon");
let FactorMenu = document.getElementById("FactorMenu");
const ShowFactorMenu = (flag) => {
  if (flag) {
    FactorIcon.classList.toggle("rotate-180");
    FactorMenu.classList.toggle("hidden");
  }
}; 
// ServicesIcon
let ServicesIcon = document.getElementById("ServicesIcon");
let ServicesMenu = document.getElementById("ServicesMenu");
const ShowServicesMenu = (flag) => {
  if (flag) {
    ServicesIcon.classList.toggle("rotate-180");
    ServicesMenu.classList.toggle("hidden");
  }
};
// FinancialDepartmentIcon
let FinancialDepartmentIcon = document.getElementById("FinancialDepartmentIcon");
let FinancialDepartmentMenu = document.getElementById("FinancialDepartmentMenu");
const ShowFinancialDepartmentMenu = (flag) => {
  if (flag) {
    FinancialDepartmentIcon.classList.toggle("rotate-180");
    FinancialDepartmentMenu.classList.toggle("hidden");
  }
};
// BankAccountIcon
let BankAccountIcon = document.getElementById("BankAccountIcon");
let BankAccountMenu = document.getElementById("BankAccountMenu");
const ShowBankAccountMenu = (flag) => {
  if (flag) {
    BankAccountIcon.classList.toggle("rotate-180");
    BankAccountMenu.classList.toggle("hidden");
  }
};
// CashDeskIcon
let CashDeskIcon = document.getElementById("CashDeskIcon");
let CashDeskMenu = document.getElementById("CashDeskMenu");
const ShowCashDeskMenu = (flag) => {
  if (flag) {
    CashDeskMenuIcon.classList.toggle("rotate-180");
    CashDeskMenu.classList.toggle("hidden");
  }
}; 
// MoneyTransferIcon
let MoneyTransferIcon = document.getElementById("MoneyTransferIcon");
let MoneyTransferMenu = document.getElementById("MoneyTransferMenu");
const ShowMoneyTransferMenu = (flag) => {
  if (flag) {
    MoneyTransferIcon.classList.toggle("rotate-180");
    MoneyTransferMenu.classList.toggle("hidden");
  }
};  
// CostAndIncomeIcon
 let CostAndIncomeIcon = document.getElementById("CostAndIncomeIcon");
let CostAndIncomeMenu = document.getElementById("CostAndIncomeMenu");
const ShowCostAndIncomeMenu = (flag) => {
  if (flag) {
    CostAndIncomeIcon.classList.toggle("rotate-180");
    CostAndIncomeMenu.classList.toggle("hidden");
  }
};  
// CostIcon 
 let CostIcon = document.getElementById("CostIcon");
let CostMenu = document.getElementById("CostMenu");
const ShowCostMenu = (flag) => {
  if (flag) {
    CostIcon.classList.toggle("rotate-180");
    CostMenu.classList.toggle("hidden");
  }
};  
// IncomeIcon
let IncomeIcon = document.getElementById("IncomeIcon");
let IncomeMenu = document.getElementById("IncomeMenu");
const ShowIncomeMenu = (flag) => {
  if (flag) {
    IncomeIcon.classList.toggle("rotate-180");
    IncomeMenu.classList.toggle("hidden");
  }
}; 
// SettingIcon
 let SettingIcon = document.getElementById("SettingIcon");
let SettingMenu = document.getElementById("SettingMenu");
const ShowSettingMenu = (flag) => {
  if (flag) {
    SettingIcon.classList.toggle("rotate-180");
    SettingMenu.classList.toggle("hidden");
  }
};
// ProfileMenu
let ProfileMenu = document.getElementById("ProfileMenu");
const ShowProfileMenu = (flag) => {
  if (flag) {
    ProfileMenu.classList.toggle("hidden");
  }
};

let Main = document.getElementById("Main");
let open = document.getElementById("open");
let close = document.getElementById("close");

const showNav = (flag) => {
  if (flag) {
    Main.classList.toggle("hidden");
    open.classList.toggle("hidden");
    close.classList.remove("hidden");
  }
};
