public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchString){
        String key = '%' + searchString + '%';
        List<Account> accountList = [SELECT Id, Name, Industry FROM Account WHERE Name LIKE :key WITH SECURITY_ENFORCED];
        return accountList;
    }
}