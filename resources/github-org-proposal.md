# Proposed Zalando Github Structure

This document outlines the proposed new structure for all teams and projects on the Zalando and Zalando-Incubator
organisations. 

There are 2 possible solutions, each with their own pros and cons. 


# Model 1 - organisation membership
Model supports the current structure, but enforces guidelines for how teams should work

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
- Recreate the Zalando team structure so it reflects the organisation

- Fashion-store
    - Search
        - Taxonomy 

- Give teams descriptions based on what they do
    - Increases visibility internally and externally who does what


### Team permissions
- Teams by default have read access to all repos, so everyone can open a pull request from their own fork
- Team members have write access to their own repos, so everyone in a team can approve pull requests and merge them in (if approved)


## Repository permissions
- Master branch is proctected, all changes must be through a pull request
    - Also for admins
- Pull requests must be approved by 2 members of the team
- CODEOWNERS file is used to assign appropriate reviewers automatically


----- 


# Model 2 - external contributor model
