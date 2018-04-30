# Zalando Github organisation structure

_May 1st 2018_ 

Document outlining the current github structure as of May 1st 2018. The purpose of this outline 
is to create a foundation for improvements, so this document is a snapshot of how the organisation
looks as per May 1st 2018.

There are no actual team or member names in this document, all names are fictional and only used as sample content. 

----

### Github Organisations

There are currently multiple organisations, this is not currently changing, the following orgs are public and in use:

- Zalando
- Zalando-incubator
- Zalando-stups
- Zalando-nakadi
- Zalando-research

## General observations

- Teams are not used correctly and are out of sync with the organisation
- Teams are created automatically and members are assigned automatically, not based on actual need
- There are too many owners of the organisation
- 151 teams have legacy admin rights
- Members can delete, fork and change visibility for repos
- there are many integrations (31 registered) on each organisation which should be reviewed

---- 

## Zalando

The main organisation for open source projects by Zalando teams - notice that Zalando also have a github enterprise setup
which is reserved for internal projects. Projects in the Zalando org are projects which have graduated from Zalando-Incubator

**47 repos, 547 members spread over 156 teams**


## Zalando-Incubator

Zalando incubator is the organisation for new open source projects by Zalando teams. Projects in the incubator
comes from the zalando github enterprise instance. When the projects have matured and are considered stable and good
open source citizens, they graduate to the main zalando org

**22 repos, 417 members spread over 271 teams**

#### Teams

- No team structure, all teams are in the root of the organisation
- There is a 'all-members' team, but not in sync with the org
- Still uses the legacy teams with admin rights

#### Security

- Members are not allowed to create repos (unless in legacy admin team or owner)
- Members are allowed to delete repos
- Members are allowed to change repo visibility
- Forking of private repos are allowed
- Members have read permissions by default
- Currently 10 people are set as owners, 151 teams have legacy admin rights

#### Integrations

- Currently have 31 apps enabled and approved to access project data
- CodeCov is installed as an app
- Jira Oauth settings added
- Zappr is monitoring
- No webhooks configured
- There is an active bot setting up members and teams for the org automatically
- No automated member or team deletion setup



## Zalando-Stups

Organisation containing projects related to Zalandos Stups architecture for AWS - there is no evaluation of the structure of this org

## Zalando-nakadi

Organisation containing projects related to Zalandos Nakadi project - there is no evaluation of the structure of this org

## Zalando-research

Organisation containing projects related to published papers by Zalando research - there is no evaluation of the structure of this org
