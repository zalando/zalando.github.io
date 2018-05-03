# Proposed Zalando Github Structure

This document outlines the proposed new structure for all teams and projects on the Zalando, Zalando-Incubator, Zalando-Stups, Zalando-Nakadi and Zalando-Zmon organisations. 

**note:** This structure is currently not possible to apply to enterprise github due to missing features
in the enterprise version - however, the long term goal is to align way of working between the
2 environments. 


# TL;DR
Model supports the current organisation structure, but enforces guidelines for how teams should work

- Zalando employees are members of the organisation
- Small number of owners / admins
- By default members only have read-only access to repose
- Project maintainers have write access to their projects through project team permissions
- Everyone can fork and contribute to all organisation projects
- Repository permissions enforces git flow and code reviews

### Pros
- Handle permissions on a team basis
- Enforces git flow for internal and external contribs
- Clearly seperates Zalando Employees from externals

### Cons
- Exposes all organisation members in reviews - this can be handled to some extend with CODEOWNERS files

----- 


# Detailed version

## Organisations
No Changes required, all organisations  keep their current purpose and the same types of projects are hosted within them - longer term a set of guidelines for zalando-incubator graduation will be produced. 

### organisation security
- Only the Open Source team along with very few additional people should be organisation owners
- organisation members have read permissions by default
- Limited number of organisation Admins
- Members are not allowed to create repositories
- Members are not allowed to delete, rename or publicize repos
- 2FA is enforced
- All legacy admin teams are migrated to member status


## Team Structure
- Current team structure provides no value in its current state
- Use teams to give access to repositories instead of individuals
- Only teams that actually have oss projects on github should be created

```
- Admin / Janitorial Teams
    - Open Source Team
    - Developer Productivity

- Project Teams
    - Team-Nakadi
    - Team-Skipper 
    - Team-etc
```

- Give teams descriptions based on what they do
- Increases visibility internally and externally who does what


### Team permissions
- Teams are for project maintainers only and teams have write acccess to their project
- Only Zalando Employees are member of teams
- Team sizes should not be beyond 2-3 people, and should not be automated


## External Collaborators
- Externals have read access to repositories 
    - r.o.p dictates 2 set of zalando eyes approves all PRs
    - externals can have write access, but that will require that all pull requests are forced approved by zalando devs - so externals cannot be part of CODEOWNERS

## Repository permissions
- Master branch is proctected, all changes must be through a pull request
    - Also for admins
- Pull requests must be approved by 2 codeowners
- CODEOWNERS file is used to assign appropriate reviewers automatically
- Enforce reviews from CODEOWNERS - this replaces Zapprs team+organisation based review enforcement
- Checks for CDO and policy and performed automatically
    - CDObot can check for signed comiits


## Branching and pull request process
- Follow git flow
- Create an issue or pick an existing issue
- Create a fork
- Create a topic branch for the specific feature ex: `website-header`
- Open a pull request outlining changes
    - include a what + why description
    - include a list of tasks to complete this pull request
    - include expected delivery
    - Pull request is automatically assigned reviewers from CODEOWNERS
    - Mark Pull request with appropriate labels for type of work - avoid acronyms
    - add `work in progress` label
- Make commits
- Remove `work in progress` label
- Notify CODEOWNERS of completed pull request via pull request message
- Participate in code review and discuss changes
- CODEOWNERS will approve and merge changes
- Mark issue as closed
- Delete branch