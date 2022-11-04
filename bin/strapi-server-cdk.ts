#!/usr/bin/env node

import 'source-map-support/register';
import {App} from 'aws-cdk-lib';
import {StrapiServerCdkStack} from '../lib/strapi-server-cdk-stack';

const app = new App();
new StrapiServerCdkStack(app, 'StrapiServerCdkStack');
