# AWS Deployment Scripts and Configuration

## S3 + CloudFront Deployment

### Prerequisites
- AWS CLI installed and configured
- S3 bucket created for static website hosting
- CloudFront distribution set up (optional but recommended)

### Deployment Script (deploy.sh)

```bash
#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Deploy to S3
echo "Deploying to S3..."
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache (if using CloudFront)
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

### S3 Bucket Policy (bucket-policy.json)

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

### CloudFormation Template (infrastructure.yml)

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Personal CV Website Infrastructure'

Parameters:
  DomainName:
    Type: String
    Description: Domain name for the website
    Default: your-domain.com

Resources:
  S3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub '${DomainName}-cv-website'
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: index.html
      PublicAccessBlockConfiguration:
        BlockPublicAcls: false
        BlockPublicPolicy: false
        IgnorePublicAcls: false
        RestrictPublicBuckets: false

  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Aliases:
          - !Ref DomainName
          - !Sub 'www.${DomainName}'
        DefaultCacheBehavior:
          TargetOriginId: S3Origin
          ViewerProtocolPolicy: redirect-to-https
          CachePolicyId: 658327ea-f89d-4fab-a63d-7e88639e58f6  # Managed-CachingOptimized
        DefaultRootObject: index.html
        Enabled: true
        Origins:
          - Id: S3Origin
            DomainName: !GetAtt S3Bucket.RegionalDomainName
            S3OriginConfig:
              OriginAccessIdentity: ''
        PriceClass: PriceClass_100
        CustomErrorResponses:
          - ErrorCode: 404
            ResponseCode: 200
            ResponsePagePath: /index.html

Outputs:
  WebsiteURL:
    Description: URL of the website
    Value: !GetAtt S3Bucket.WebsiteURL
  CloudFrontURL:
    Description: CloudFront distribution URL
    Value: !GetAtt CloudFrontDistribution.DomainName
```

## AWS Amplify Deployment

### amplify.yml Configuration

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## GitHub Actions for CI/CD

### .github/workflows/deploy.yml

```yaml
name: Deploy to AWS S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build project
      run: npm run build
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to S3
      run: |
        aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} --delete
    
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

## Quick Setup Commands

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://your-bucket-name
   aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
   ```

2. **Deploy manually:**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Create CloudFront distribution:**
   ```bash
   aws cloudfront create-distribution --distribution-config file://cloudfront-config.json
   ```

## Environment Variables

Create a `.env` file for configuration:

```
VITE_APP_TITLE=Your Name - Personal CV
VITE_APP_DESCRIPTION=Personal CV and Portfolio Website
VITE_CONTACT_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

## Security Best Practices

1. **Use CloudFront** for better security and performance
2. **Enable HTTPS** with SSL certificates
3. **Set up proper CORS** policies
4. **Use IAM roles** with minimal permissions
5. **Enable access logging** for monitoring
6. **Implement CSP headers** for additional security

## Cost Optimization

- **S3 Standard:** ~$0.023 per GB per month
- **CloudFront:** ~$0.085 per GB for first 10 TB
- **Route 53:** ~$0.50 per hosted zone per month
- **Total estimated cost:** $5-15/month for typical personal website

## Monitoring and Analytics

Consider adding:
- **AWS CloudWatch** for monitoring
- **Google Analytics** for visitor tracking
- **AWS WAF** for web application firewall
- **AWS Shield** for DDoS protection
