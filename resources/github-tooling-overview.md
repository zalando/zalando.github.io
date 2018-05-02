#Tooling used in the Zalando github orgs

Overview document of the current automations used on the zalando orgs and have it effects workflow.

## Zappr
Primarily used to enforce pull request approvals with the 4-eye principal. Can also be used to 
auto-create branches for new issues, can check pull requests for a specification, and can
block pull requests that does not follow certain formats or have a label assigned. 

- In regards to pull request approval, github now supports this natively
- The other checks can still be used with Zappr, but they have no effect on organisation
- Zappr is not mandatory, so if a repository does not have a zappr file it is not checked. 


### Effects on org structure and workflow
- Requires all approvers to be a member of the zalando org


## Github-Team-Sync
Auto creates teams on Zalando and Zalando-Incubator and assigns members based on their zalando team automatically.

### Effects on org structure and workflow
- Adds lots of noise to the orgs as team uses code names
- there is no structure to the teams, so benefits of current team structure is limited
- teams are not used in zappr so no benefit there either


## External Tools and apps

Zalando Incubator currently lists 31 allowed apps - it is unknown how much these are used. However
if applications are not used they should be purged. 

## Effects on org structure and workflows
- External apps on github does in general not enforce any specific org structure