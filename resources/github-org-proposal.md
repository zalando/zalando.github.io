# Proposed Zalando Github Structure

This document outlines the proposed new structure for all teams and projects on the Zalando and Zalando-Incubator
organisations. 


# Organisation membership
Model supports the current structure, but enforces guidelines for how teams should work

- Zalando employees are members of the organisation
- Small number of owners
- By default members only have read-only access

#### Pros
- Handle permissions on a team basis
- Enforces git flow for internal and external contribs
- Clearly seperates Zalando Employees from externals

#### Cons
- Exposes all org members in reviews - this can be handled to some extend with CODEOWNERS

## Organisations
No Changes required, Zalando and Zalando-Incubator keep their current purpose and the same types of projects are hosted within them - longer term a set of guidelines for incubator graduation will be produced. 

### Org security
- Only the Open Source team along with very few additional people should be org owners
- Org members have read permissions by default
- Limited number of Org Admins
- Members are not allowed to create repositories
- Members are not allowed to delete, rename or publicize repos
- 2FA is enabled
- All legacy admin teams are migrated to member status

## Team Structure
- Current team structure can be re-used, but it provides no value in its current state
- Use teams to give access to repositories instead of individuals
- Only teams that actually have oss projects on github should be created
- Recreate the Zalando team structure so it reflects the organisation

- Fashion-store
    - Search
        - Taxonomy 
        - etc

- Give teams descriptions based on what they do
    - Increases visibility internally and externally who does what


### Team permissions
- Teams by default have read access to all repos, so everyone can open a pull request from their own fork
- Team members have write access to their own repos, so everyone in a team can approve pull requests and merge them in (if approved)


## External Collaborators
- Externals have read access to repos 
    - r.o.p dictates 2 set of zalando eyes approves all PRs
    - externals can have write access, but that will require that all pull requests are forced approved by zalando devs - so externals cannot be part of CODEOWNERS


## Repository permissions
- Master branch is proctected, all changes must be through a pull request
    - Also for admins
- Pull requests must be approved by 2 codeowners
- CODEOWNERS file is used to assign appropriate reviewers automatically
- Checks for CDO and policy and performed automatically
    - CDObot can check for signed comiits
    - Zappr can do policy checks - altho it does not seemed used atm



## Pull Requests
- All pull requests are made from a fork, not within the repository
- As soon as work start on a change, a pull request is opened (template available)
- A new pull request is marked with the label `pr: work in progress`
- When work has completed, the `pr: work in progress` is removed and the team is pinged 
- Pull request is marked with appropriate labels for type of work - avoid acronyms
- Pull request is automatically assigned reviewers from CODEOWNERS


----- 
